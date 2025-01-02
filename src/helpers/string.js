export function capitalize(word) {
  if (!word) { // guard clause
    return word;
  }
  return `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`;
}
