function scoring() {
  let numObj = {};
  let score = 0;
  let arrs = Array.prototype.slice.call(arguments);
  arrs.forEach(num => {
    if (numObj[num]) {
      numObj[num] += 1;
    } else {
      numObj[num] = 1;
    }
  });

  const result = calculateScore(numObj);

  Object.keys(result).forEach(item => score += result[item]);
  return score;

}


function calculateScore(numObj) {
  const result = {};
  Object.keys(numObj).forEach(value => {
    switch (value) {
      case '1':
        if (!(numObj[value] < 3)) {
          result[value] = parseInt(numObj[value] / 3) * 1000 + numObj[value] % 3 * 100;
        } else {
          result[value] = numObj[value] * 100
        }
        break;
      case '5':
        if (!(numObj[value] < 3)) {
          result[value] = parseInt(numObj[value] / 3) * 100 * value + numObj[value] % 3 * 50
        } else {
          result[value] = numObj[value] * 50;
        }
        break;
      default:
        if (!(numObj[value] < 3)) {
          result[value] = parseInt(numObj[value] / 3) * 100 * value;
        } else {
          result[value] = 0;
        }
        break;
    }
  });
  return result;
}

module.exports = scoring;
