import { useEffect, useRef } from 'react';
import { setupWeatherDither } from './WeatherDither.helpers';
import {
  WeatherCopy,
  WeatherDev,
  WeatherField,
  WeatherSection,
} from './GdanskWeatherSection.components';
import { WEATHER_STATES } from './GdanskWeatherSection.consts';

function WeatherDither() {
  const rowRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    const field = fieldRef.current;
    const canvas = canvasRef.current;
    if (!row || !field || !canvas || field.dataset.weatherInitialized === '1') {
      return;
    }

    field.dataset.weatherInitialized = '1';
    return setupWeatherDither(row, field, canvas);
  }, []);

  return (
    <WeatherSection
      ref={rowRef}
      data-weather-row
      aria-label="Gdańsk weather"
    >
      <WeatherCopy>
        <p data-weather-copy>
          The weather today in Gdańsk is waiting for the latest forecast.
        </p>
      </WeatherCopy>
      <WeatherField ref={fieldRef} data-weather-dither>
        <canvas ref={canvasRef} aria-hidden="true" />
        <WeatherDev data-weather-dev inert>
          {WEATHER_STATES.map((state) => (
            <button key={state.code} type="button" data-wx-code={state.code}>
              {state.label}
            </button>
          ))}
          <button type="button" data-wx-night>
            Night
          </button>
          <button type="button" data-wx-live>
            Live
          </button>
          <input
            type="range"
            min="-12"
            max="36"
            defaultValue="18"
            data-wx-temp
            aria-label="Peak temperature"
          />
        </WeatherDev>
      </WeatherField>
    </WeatherSection>
  );
}

export default WeatherDither;
