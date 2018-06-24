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

  Object.keys(numObj).forEach(value => {
    switch (value) {
      case '1':
        if (!(numObj[value] < 3)) {
          numObj[value] = parseInt(numObj[value] / 3) * 1000 + numObj[value] % 3 * 100;
        } else {
          numObj[value] = numObj[value] * 100
        }
        break;
      case '5':
        if (!(numObj[value] < 3 )) {
          numObj[value] = parseInt(numObj[value] / 3) * 100 * value + numObj[value] % 3 * 50
        } else {
          numObj[value] = numObj[value] * 50;
        }
        break;
      default:
        if (!(numObj[value] < 3)) {
          numObj[value] = parseInt(numObj[value] / 3) * 100 * value;
        } else {

          numObj[value] = 0;
        }
        break;
    }
  });

  Object.keys(numObj).forEach(item => score += numObj[item]);
  return score;

}

module.exports = scoring;
