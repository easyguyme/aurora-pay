"use client";

import { cn } from "@/lib/utils";

export type ComparisonBar = {
  id: string;
  label: string;
  color: string;
  fees: number;
};

/**
 * Grouped horizontal bars comparing estimated monthly fees per provider.
 * Rendered as plain SVG so it needs no charting dependency.
 */
export function ProviderComparisonChart({
  providers,
  className,
}: {
  providers: ComparisonBar[];
  className?: string;
}) {
  const max = Math.max(...providers.map((p) => p.fees), 1);
  const rowHeight = 52;
  const barHeight = 22;
  const height = providers.length * rowHeight + 12;
  const labelWidth = 96;
  const chartWidth = 520;
  const trackWidth = chartWidth - labelWidth - 76;

  return (
    <svg
      viewBox={`0 0 ${chartWidth} ${height}`}
      className={cn("mt-4 w-full", className)}
      role="img"
      aria-label="Estimated monthly fees by provider"
    >
      {providers.map((p, i) => {
        const y = i * rowHeight + 6;
        const width = Math.max(2, (p.fees / max) * trackWidth);
        const isAurora = i === 0;
        return (
          <g key={p.id}>
            <text
              x={0}
              y={y + barHeight / 2 + 4}
              fontSize={12}
              fill={isAurora ? "var(--foreground)" : "var(--muted-foreground)"}
              fontWeight={isAurora ? 600 : 400}
            >
              {p.label}
            </text>
            <rect
              x={labelWidth}
              y={y}
              width={trackWidth}
              height={barHeight}
              rx={5}
              fill="var(--muted)"
              opacity={0.5}
            />
            <rect
              x={labelWidth}
              y={y}
              width={width}
              height={barHeight}
              rx={5}
              fill={p.color}
            />
            <text
              x={labelWidth + width + 8}
              y={y + barHeight / 2 + 4}
              fontSize={11}
              fill="var(--muted-foreground)"
            >
              $
              {p.fees.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
