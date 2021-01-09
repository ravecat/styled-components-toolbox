import { withProps } from "recompose";

import { MONTH, MONTH_NUMBER, WEEKDAY } from "./constant";

export default withProps(({ value, mask = "bDYt" }) => {
  const [weekDayShort, monthShort, day, year, time] = new Date(value)
    .toString()
    .split(" ");
  const [hour, minute, second] = time.split(":");
  const month = MONTH_NUMBER[monthShort];
  const weekDayLong = WEEKDAY[weekDayShort];
  const monthLong = MONTH[monthShort];

  const MATCH = {
    ["Y"]: year,
    ["M"]: month,
    ["D"]: day,
    ["m"]: minute,
    ["h"]: hour,
    ["s"]: second,
    ["a"]: weekDayShort,
    ["A"]: weekDayLong,
    ["b"]: monthShort,
    ["B"]: monthLong,
    ["t"]: time
  };

  const date = mask
    .split("")
    .map(param => (MATCH[param] ? MATCH[param] : param))
    .join(" ");

  return { date };
});
