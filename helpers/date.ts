import { format, parseISO as parseString } from "date-fns";

const DATE_FORMAT = "MMMM dd, yyyy";
const DATETIME_FORMAT = "yyyy.MM.dd HH:mm:ss";
export const parse = (date: string) => {
  return format(parseString(date), DATE_FORMAT);
};

export function formatMoment(moment: number | null): string {
  return moment ? format(new Date(moment), DATETIME_FORMAT) : "undefined";
}

export function formatDate(date: Date): string {
  return format(new Date(date), DATETIME_FORMAT);
}
