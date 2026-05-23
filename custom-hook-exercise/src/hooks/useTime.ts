import { useEffect, useState } from "react";

type TimeUnit = "day" | "hour" | "minute" | "second";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const readTime = (unit: TimeUnit): string => {
  const now = new Date();
  switch (unit) {
    case "day":
      return DAY_NAMES[now.getDay()];
    case "hour":
      return String(now.getHours());
    case "minute":
      return String(now.getMinutes()).padStart(2, "0");
    case "second":
      return String(now.getSeconds()).padStart(2, "0");
  }
};

export function useTime<T extends string = string>(unit: TimeUnit): T {
  const [, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return readTime(unit) as T;
}
