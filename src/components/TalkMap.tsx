const cities = [
  ["Stockholm", 67, 35],
  ["London", 18, 47],
  ["Amsterdam", 29, 48],
  ["Paris", 24, 61],
  ["Nantes", 15, 69],
  ["Antwerp", 31, 55],
  ["Hamburg", 42, 43],
  ["Berlin", 51, 49],
  ["Nuremberg", 47, 61],
  ["Vilnius", 72, 39],
  ["Bucharest", 74, 76],
  ["Rome", 51, 88],
  ["Milan", 45, 74],
  ["Zürich", 42, 70],
  ["Bern", 39, 72],
] as const;

export default function TalkMap() {
  const home = { x: 40, y: 74 };
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-card border-3 border-ink bg-surface-muted shadow-[9px_9px_0_var(--color-brand-tint-strong)]"
      role="img"
      aria-label="Map of European cities Nico has spoken in, connected to Thun in Switzerland"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <path
          d="M5 8 L25 5 33 17 43 13 48 5 61 12 70 7 91 17 95 43 87 51 91 68 77 90 60 91 53 79 43 96 35 76 16 83 9 65 14 45 4 34Z"
          fill="#eef0f2"
          stroke="#fff"
          strokeWidth="0.6"
        />
        {cities.map(([name, x, y]) => (
          <g key={name}>
            <line
              x1={home.x}
              y1={home.y}
              x2={x}
              y2={y}
              stroke="#009d89"
              strokeWidth="0.35"
              opacity="0.55"
            />
            <circle
              cx={x}
              cy={y}
              r="1"
              fill="#ee5fa7"
              stroke="#15171c"
              strokeWidth="0.5"
            />
            <text
              x={x + 1.7}
              y={y + 0.8}
              fontSize="2.2"
              fontFamily="monospace"
              fill="#15171c"
            >
              {name}
            </text>
          </g>
        ))}
        <circle
          cx={home.x}
          cy={home.y}
          r="1.7"
          fill="#f5c842"
          stroke="#15171c"
          strokeWidth="0.7"
        />
        <text
          x={home.x}
          y={home.y + 4}
          textAnchor="middle"
          fontSize="2.7"
          fontFamily="Nunito"
          fontWeight="800"
          fill="#15171c"
        >
          Thun, CH
        </text>
      </svg>
    </div>
  );
}
