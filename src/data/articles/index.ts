import type { ReactNode } from "react";
import { article as musicos } from "./por-que-los-musicos-necesitan-web-propia";

export const articles: Record<string, { content: ReactNode }> = {
  "por-que-los-musicos-necesitan-web-propia": musicos,
};