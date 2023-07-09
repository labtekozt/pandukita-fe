// function to formatDistance a date
export function formatDistance(date) {
  const dateNew = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now - dateNew) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  return years > 0
    ? `${years} year${years > 1 ? "s" : ""} ago`
    : months > 0
    ? `${months} month${months > 1 ? "s" : ""} ago`
    : days > 0
    ? `${days} day${days > 1 ? "s" : ""} ago`
    : hours > 0
    ? `${hours} hour${hours > 1 ? "s" : ""} ago`
    : minutes > 0
    ? `${minutes} minute${minutes > 1 ? "s" : ""} ago`
    : `${seconds} second${seconds > 1 ? "s" : ""} ago`;
}

export function humanizeDate(date) {
  const dateNew = new Date(date);
  // format date monday, 1 january 2021
  // transform to locale indonesia
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateNew.toLocaleDateString("id-ID", options);
}

export function humanizeTime(date) {
  const dateNew = new Date(date);
  // format date 10:00
  // transform to locale indonesia
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  return dateNew.toLocaleTimeString("id-ID", options);
}

export function humanizeDateTimeShort(date) {
  const dateNew = new Date(date);
  // format date 1 january 2021
  // transform to locale indonesia
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return dateNew.toLocaleDateString("id-ID", options);
}
