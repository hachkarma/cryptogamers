import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  const locales = {es}
  return <time dateTime={dateString}>{format(date, 'd LLLL, yyyy', {locale: locales['es']})}</time>
}
