const _ = require('lodash');

const rules = {
    '1': {
        threeTimes: number => 1000,
        singleTimes: number => 100
    },
    '5': {
        threeTimes: number => 500,
        singleTimes: number => 50
    },
    'other': {
        threeTimes: number => number * 100,
        singleTimes: number => 0
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
         result[number] = calculateTimes(number, count);
     });
    return result;
}

function calculateTimes(number, count) {
    let calculateRule = rules[number] || rules['other'];
    if (count < 3) {
        return count * calculateRule.singleTimes(number);
    } else {
        return parseInt(count / 3) * calculateRule.threeTimes(number) + count % 3 * calculateRule.singleTimes(number);
    }
}

module.exports = scoring;
