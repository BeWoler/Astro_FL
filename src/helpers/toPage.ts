export const toPage = (link: string, time: number): void => {
  setTimeout(() => (location.href = link), time);
};
