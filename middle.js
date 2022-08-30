
const middle = function(array) {
  const result = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let mid = array.length / 2;
    result.push(array[mid - 1], array[mid]);
    return result;
  } else {
    let mid = Math.floor(array.length / 2);
    result.push(array[mid]);
    return result;

  }
};

module.exports = middle;

