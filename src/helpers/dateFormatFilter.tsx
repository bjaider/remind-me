type dateFormatFilterProps = {
  day: number
  month: string
  year: string
}

export const dateFormatFilter = (
  startDate: dateFormatFilterProps,
  endDate: dateFormatFilterProps,
) => {
  const {day: startDay, month: startMonth, year: startYear} = startDate
  const {day: endDay, month: endMonth, year: endYear} = endDate
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} - ${endDay}, ${startYear}`
  } else if (startYear === endYear) {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
  } else {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
  }
}
