export const toPage = (link: string, time?: number): void => {
  time
    ? setTimeout(() => (location.href = link), time)
    : (location.href = link);
};
