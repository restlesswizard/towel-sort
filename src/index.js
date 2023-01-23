
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  
  let sortedArray = [];
  
  matrix.map((elem) => {
    if (matrix.indexOf(elem) % 2 > 0) {
      let oddElem = elem.reverse();
      sortedArray.push(oddElem);
    } else {
      let evenElem = elem;
      sortedArray.push(evenElem)
    }
  })

  return sortedArray.flat()
}
