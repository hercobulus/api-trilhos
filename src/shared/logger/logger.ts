export default function (message: string, time = new Date()) {
  // eslint-disable-next-line no-console
  console.log(`${time} - ${message}`);
}
