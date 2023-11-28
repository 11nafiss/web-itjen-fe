export const formatYear = (date: Date) => {
  const savedDate = new Date(date)
  const year = String(savedDate.getFullYear())
  // return new Date(date).toLocaleDateString()
  return year
}
