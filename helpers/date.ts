import { format, parseISO as parseString } from "date-fns";

const DATE_FORMAT = "MMMM dd, yyyy";
const DATETIME_FORMAT = "yyyy.MM.dd HH:mm:ss";
export const parse = (date: string) => {
  return format(parseString(date), DATE_FORMAT);
};

export function formatMoment(moment: number): string {
  return format(new Date(moment), DATETIME_FORMAT);
}

export function formatDate(moment: number): string {
  return format(new Date(moment), DATETIME_FORMAT);
}
