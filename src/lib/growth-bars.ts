/**
 * Deterministic, seed-based bar heights that always trend upward and end on
 * the tallest bar — used so each service page shows a slightly different
 * (but still "growing") chart instead of one identical stock graphic.
 */
export function generateTrendingBars(seed: string, count = 7): number[] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 1000;
  }

  const bars: number[] = [];
  let base = 30 + (hash % 15);
  for (let i = 0; i < count; i++) {
    const wobble = ((hash >> i) % 13) - 4;
    base = Math.min(96, Math.max(28, base + 8 + wobble));
    bars.push(base);
  }
  bars[bars.length - 1] = Math.max(90, bars[bars.length - 1]);
  return bars;
}
