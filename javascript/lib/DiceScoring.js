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
  Object.keys(numObj).forEach(number => {
    switch (number) {
      case '1':
        if (!(numObj[number] < 3)) {
          result[number] = parseInt(numObj[number] / 3) * 1000 + numObj[number] % 3 * 100;
        } else {
          result[number] = numObj[number] * 100
        }
        break;
      case '5':
        if (!(numObj[number] < 3)) {
          result[number] = parseInt(numObj[number] / 3) * 100 * number + numObj[number] % 3 * 50
        } else {
          result[number] = numObj[number] * 50;
        }
        break;
      default:
        if (!(numObj[number] < 3)) {
          result[number] = parseInt(numObj[number] / 3) * 100 * number;
        } else {
          result[number] = 0;
        }
        break;
    }
  });
  return result;
}

module.exports = scoring;
