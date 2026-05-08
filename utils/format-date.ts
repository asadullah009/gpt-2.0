export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(date);
}