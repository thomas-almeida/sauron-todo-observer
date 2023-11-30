export default function convertDateMod(date) {
  
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
