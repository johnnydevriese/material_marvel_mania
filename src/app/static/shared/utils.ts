export function isValidDate(date): boolean {
  return !Number.isNaN(new Date(date).valueOf());
};
