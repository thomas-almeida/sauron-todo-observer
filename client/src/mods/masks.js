export default function dateMask(value) {
  const cleanValue = value.replace(/\D/g, '')
  const charLimit = cleanValue.slice(0, 8)
  const formattedValue = charLimit.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')

  return formattedValue
}
