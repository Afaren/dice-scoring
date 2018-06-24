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


function calculateScore(numberCountMap) {
  const result = {};
  Object.keys(numberCountMap).forEach(number => {
    let count = numberCountMap[number];
    switch (number) {
      case '1':
        if (!(count < 3)) {
          result[number] = parseInt(count / 3) * 1000 + count % 3 * 100;
        } else {
          result[number] = count * 100
        }
        break;
      case '5':
        if (!(count < 3)) {
          result[number] = parseInt(count / 3) * 100 * number + count % 3 * 50
        } else {
          result[number] = count * 50;
        }
        break;
      default:
        if (!(count < 3)) {
          result[number] = parseInt(count / 3) * 100 * number;
        } else {
          result[number] = 0;
        }
        break;
    }
  });
  return result;
}

module.exports = scoring;
