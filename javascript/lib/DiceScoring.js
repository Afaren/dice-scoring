const _ = require('lodash');

const rule = {
    '1': {
        threeRatio: 1000,
        singleRatio: 100
    },
    '5': {
        threeRatio: 500,
        singleRatio: 50
    },
    'other': {
        threeRatio: 100,
        singleRatio: 0
    }
};

function scoring(...args) {
    const numberCountMap = args.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});

    const result = calculateScore(numberCountMap);

    return _.values(result)
        .reduce((acc, cur) => acc + cur, 0);
}


function calculateScore(numberCountMap) {
    const result = {};
    _.entries(numberCountMap)
        .forEach(([number, count]) => {
            result[number] = calculateRatio(number, count);
        });
    return result;
}

function calculateRatio(number, count) {
    rule['other'].threeRatio = 100 * number;
    let calculateRule = rule[number] || rule['other'];
    if (!(count < 3)) {
        return parseInt(count / 3) * calculateRule.threeRatio + count % 3 * calculateRule.singleRatio;
    } else {
        return count * calculateRule.singleRatio;
    }
}

module.exports = scoring;
