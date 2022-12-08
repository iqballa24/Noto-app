export default function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    text = text.substr(0, maxLength) + "...";
  }
  return text;
}
