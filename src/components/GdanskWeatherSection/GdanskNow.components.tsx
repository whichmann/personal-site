type WeatherIconProps = {
  code: number;
};

export function WeatherIcon({ code }: WeatherIconProps) {
  const common = {
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    width: 16,
    height: 16,
    'aria-hidden': true,
  } as const;

  if (code === 0 || code === 1) {
    return (
      <svg {...common} strokeLinecap="square">
        <circle cx="8" cy="8" r="2.6" fill="currentColor" stroke="none" />
        <path d="M8 1.6v1.8M8 12.6v1.8M1.6 8h1.8M12.6 8h1.8M3.3 3.3l1.3 1.3M11.4 11.4l1.3 1.3M3.3 12.7l1.3-1.3M11.4 4.6l1.3-1.3" />
      </svg>
    );
  }

  if (code === 2) {
    return (
      <svg {...common} strokeLinejoin="miter">
        <path d="M4.2 11.4h7.4a2.2 2.2 0 0 0 .2-4.4 3.2 3.2 0 0 0-6.1-1.1A2.4 2.4 0 0 0 4.2 11.4z" />
      </svg>
    );
  }

  if (code === 3) {
    return (
      <svg {...common}>
        <path d="M3.4 11.6h8.4a2.1 2.1 0 0 0 .1-4.2 3 3 0 0 0-5.8-1A2.3 2.3 0 0 0 3.4 11.6z" />
        <path d="M4.6 12.8h7.2" />
      </svg>
    );
  }

  if (code === 45 || code === 48) {
    return (
      <svg {...common} strokeLinecap="square">
        <path d="M2.5 5.5h11M3.5 8h9M2.5 10.5h11" />
      </svg>
    );
  }

  if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
    return (
      <svg {...common} strokeLinecap="square">
        <path d="M8 2.4v11.2M3.4 8h9.2M4.6 4.6l6.8 6.8M11.4 4.6l-6.8 6.8" />
      </svg>
    );
  }

  if (code >= 95) {
    return (
      <svg {...common} strokeLinejoin="miter">
        <path d="M4.4 8.2h6.8A2 2 0 0 0 11.4 4.2 3 3 0 0 0 5.8 3.4 2.2 2.2 0 0 0 4.4 8.2z" />
        <path d="M8.6 8.4L6.6 12h2.2l-1.6 3" />
      </svg>
    );
  }

  return (
    <svg {...common} strokeLinecap="square">
      <path d="M4.4 8.6h7.2A2 2 0 0 0 11.8 4.6 3 3 0 0 0 6 3.8 2.2 2.2 0 0 0 4.4 8.6z" />
      <path d="M6 10.4l-.8 2.4M8.4 10.4l-.8 2.4M10.8 10.4l-.8 2.4" />
    </svg>
  );
}
