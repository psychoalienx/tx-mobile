export function strLimit(str: string, limit: number, add = "...") {
  return str.length <= limit ? str : `${str.substring(0, limit)}${add}`;
}
