
exports.min = function min (array = []) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((m, n) => (m < n ? m : n), array[0]);
}

exports.max = function max (array = []) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((m, n) => (m > n ? m : n), array[0]);
}

exports.avg = function avg (array = []) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, num) => (acc + num), 0) / array.length;
}
