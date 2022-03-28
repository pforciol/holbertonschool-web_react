export const concatElements = (page1, page2) => {
  return [...page1, ...page2];
};

export const mergeElements = (page1, page2) => {
  return [...new Set([...page1, ...page2])];
};

const list = [1, 2, 3, 4, 5];
const list2 = [2, 5, 6, 7, 8];

console.log(concatElements(list, list2));
console.log(mergeElements(list, list2));
