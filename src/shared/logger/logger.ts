export default function (message: string, time = new Date()) {
  return `${time} - ${message}`;
}
