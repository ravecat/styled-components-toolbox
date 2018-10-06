import { withProps } from "recompose";
import { MONTH, MONTH_NUMBER, WEEKDAY } from "./constant";

interface DateProps {
  value: string | Date;
  mask?: string;
}

export default withProps(({ value, mask = "bDYt" }: DateProps) => {
  const [weekDayShort, monthShort, day, year, time]: Array<string> = new Date(
    value
  )
    .toString()
    .split(" ");
  const [hour, minute, second]: Array<string> = time.split(":");
  const month: string = MONTH_NUMBER[monthShort];
  const weekDayLong: string = WEEKDAY[weekDayShort];
  const monthLong: string = MONTH[monthShort];

  const MATCH: { [id: string]: string } = {
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
    .map((param: string) => (MATCH[param] ? MATCH[param] : param))
    .join(" ");

  return { date };
});
