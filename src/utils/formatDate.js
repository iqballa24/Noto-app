export default function formatDate(stringDate) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const newDate = new Date(stringDate);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate()
  const day = newDate.getDay();

  return `${days[day]}, ${date} ${months[month]} ${year}`;
}
