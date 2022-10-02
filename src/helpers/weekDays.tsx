import moment from 'moment'
export const weekDays = (week: number = 0) => {
  var currentDate = moment().day(week)
  var weekStart = currentDate.clone().startOf('week')
  type Days = {
    day: number
    weekday: string
    month: any
    year: any
  }
  var days: Days[] = []
  for (let i = 0; i <= 6; i++) {
    days.push({
      day: moment(weekStart).add(i, 'days').date(),
      weekday: moment(weekStart).add(i, 'days').format('ddd'),
      month: moment(weekStart).add(i, 'days').format('MMMM'),
      year: moment(weekStart).add(i, 'days').format('YYYY'),
    })
  }
  return {days}
}
