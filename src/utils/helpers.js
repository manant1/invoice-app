export const parseDateString = (dateString) => {
  const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return `${day} ${monthsShort[month]} ${year}`
}