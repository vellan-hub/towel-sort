
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length == 0) {
        return [];
      }
    for (let i = 1; i < matrix.length; i++) {
    if (i % 2 !== 0) {matrix[i].reverse()}}
    return matrix.flat()
}
