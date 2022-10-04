export const formatDateTime = (eventDate: any, start: string, end: string) => {
  const date = new Date(eventDate)
  const newStart = start.split(':')
  const newEnd = end.split(':')
  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    +newStart[0],
    +newStart[1],
  )
  const endStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    +newEnd[0],
    +newEnd[1],
  )
  return {startDate, endStart}
}
