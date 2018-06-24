const _ = require('lodash');

const rule = {
    '1': {
        threeRatio: number => 1000,
        singleRatio: number => 100
    },
    '5': {
        threeRatio: number => 500,
        singleRatio: number => 50
    },
    'other': {
        threeRatio: number => number * 100,
        singleRatio: number => 0
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
    let calculateRule = rule[number] || rule['other'];
    if (!(count < 3)) {
        return parseInt(count / 3) * calculateRule.threeRatio(number) + count % 3 * calculateRule.singleRatio(number);
    } else {
        return count * calculateRule.singleRatio(number);
    }
}

module.exports = scoring;
