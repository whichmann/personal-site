import { useEffect, useState } from 'react';
import {
  GDANSK_WX_KEY,
  OPEN_METEO_FORECAST_URL,
  WEATHER_CACHE_TTL,
  pickGdanskWx,
  type GdanskWx,
} from '../../utils/weather';
import {
  emitGdanskWeather,
  formatGdanskTime,
  readCachedGdanskWeather,
} from './GdanskNow.helpers';
import { WeatherIcon } from './GdanskNow.components';

type GdanskNowProps = {
  className?: string;
};

function GdanskNow({ className }: GdanskNowProps) {
  const [currentTime, setCurrentTime] = useState(formatGdanskTime);
  const [currentTimestamp, setCurrentTimestamp] = useState(() =>
    new Date().toISOString(),
  );
  const [weather, setWeather] = useState<GdanskWx | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatGdanskTime());
      setCurrentTimestamp(new Date().toISOString());
    };
    updateTime();
    const timer = window.setInterval(updateTime, 1000 * 15);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const cached = readCachedGdanskWeather(
      GDANSK_WX_KEY,
      WEATHER_CACHE_TTL * 1000,
    );
    if (cached) {
      setWeather(cached);
      emitGdanskWeather(cached);
    }

    const controller = new AbortController();
    fetch(OPEN_METEO_FORECAST_URL, {
      referrerPolicy: 'no-referrer',
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) => {
        const nextWeather = pickGdanskWx(data);
        if (!nextWeather) return;

        setWeather(nextWeather);
        emitGdanskWeather(nextWeather);
        try {
          sessionStorage.setItem(
            GDANSK_WX_KEY,
            JSON.stringify({ at: Date.now(), ...nextWeather }),
          );
        } catch {
          // Ignore unavailable session storage.
        }
      })
      .catch(() => {
        // Weather is decorative; retain the clock when the API is unavailable.
      });

    return () => controller.abort();
  }, []);

  const roundedTemperature = weather ? Math.round(weather.temp) : null;

  return (
    <span className={className} data-gdansk-now>
      <time dateTime={currentTimestamp} data-gdansk-time>
        {currentTime}
      </time>
      {weather && roundedTemperature !== null && (
        <span
          className="wx"
          data-gdansk-wx
          title={`Gdańsk ${roundedTemperature}°C`}
        >
          <span className="wx-icon" data-gdansk-icon>
            <WeatherIcon code={weather.code} />
          </span>
          <span className="wx-temp" data-gdansk-temp>
            {roundedTemperature}°
          </span>
        </span>
      )}
    </span>
  );
}

export default GdanskNow;
