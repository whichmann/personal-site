import type { GdanskWx } from '../../utils/weather';

export const GDANSK_TIME_ZONE = 'Europe/Warsaw';

export const formatGdanskTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: GDANSK_TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());

export const gdanskHour = () => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: GDANSK_TIME_ZONE,
    hour: '2-digit',
    hour12: false,
  }).formatToParts(new Date());

  return Number(parts.find((part) => part.type === 'hour')?.value ?? '12');
};

export const readCachedGdanskWeather = (
  key: string,
  ttl: number,
): GdanskWx | null => {
  try {
    const cached = JSON.parse(sessionStorage.getItem(key) || 'null');
    if (
      cached &&
      Date.now() - cached.at < ttl &&
      typeof cached.temp === 'number' &&
      typeof cached.code === 'number'
    ) {
      return {
        temp: cached.temp,
        code: cached.code,
        todayCode:
          typeof cached.todayCode === 'number' ? cached.todayCode : cached.code,
        tempMax: typeof cached.tempMax === 'number' ? cached.tempMax : cached.temp,
      };
    }
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }

  return null;
};

export const emitGdanskWeather = (weather: GdanskWx) => {
  window.dispatchEvent(
    new CustomEvent('gdansk:now', {
      detail: {
        ...weather,
        hour: gdanskHour(),
      },
    }),
  );
};
