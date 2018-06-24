function scoring(...args) {
  const numberCountMap = args.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1;
    return acc;
  }, {});

  const result = calculateScore(numberCountMap);

  return Object.values(result)
               .reduce((acc, cur) => acc + cur, 0);
}


function calculateScore(numberCountMap) {
  const result = {};
  Object.entries(numberCountMap)
        .forEach(([number, count]) => {
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
