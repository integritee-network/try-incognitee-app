import { format, parseISO as parseString } from 'date-fns'

const DATE_FORMAT = 'MMMM dd, yyyy'

export const parse = (date: string) => {
  return format(parseString(date), DATE_FORMAT)
}
