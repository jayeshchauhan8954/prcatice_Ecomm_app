const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  return 0;
};

const square = (a) => {
  return a * a;
};

module.exports = { sum, square };
