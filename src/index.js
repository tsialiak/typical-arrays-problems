
exports.min = function min (array) {
  return (array && array.length) ? array.reduce( (acc, elem) => (acc > elem) ? elem : acc) : 0;
}

exports.max = function max (array) {
  return (array && array.length) ? array.reduce( (acc, elem) => (acc < elem) ? elem : acc) : 0;
}

exports.avg = function avg (array) {
  return (array && array.length) ? array.reduce( (acc, elem) => Math.round((acc + elem / array.length) * 100) / 100, 0) : 0;
}
