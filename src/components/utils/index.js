export function doubleNum(num) {
  if (typeof num === 'number') {
    return num + num;
  }
  return null;
}

export function sortAscending(array) {
  if(!arguments.length) return null;
  return array.sort((a,b) => a - b);
}
