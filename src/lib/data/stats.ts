export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export const homeStats: Stat[] = [
  { value: 12.4, prefix: "$", suffix: "M+", label: "Ad spend managed", decimals: 1 },
  { value: 240, suffix: "+", label: "Clients served" },
  { value: 27, suffix: "", label: "Countries" },
  { value: 4.2, suffix: "x", label: "Average client ROAS", decimals: 1 },
];
