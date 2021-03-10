
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []
  
  return matrix.reduce(function(acc, val, index) {
    if (index % 2 !== 0) {
      val = val.reverse()
    }
    return [...acc, ...val]
  }, [])
}
