export const reverse = (word) => {
  let i = 0;
  let result = '';
  while (word.length !== i) {
    result = word[i] + result;
    i++;
  }
  return result;
};
