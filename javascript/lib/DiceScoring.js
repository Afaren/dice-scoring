const _ = require('lodash');

const scoringRules = {
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

    return calculateScore(numberCountMap)
        .reduce((acc, cur) => acc + cur, 0);
}


function calculateScore(numberCountMap) {
    return _.entries(numberCountMap)
            .map(([number, count]) => calculateTimes(number, count));
}

function calculateTimes(number, count) {
    let rule = scoringRules[number] || scoringRules['other'];
    if (count < 3) {
        return count * rule.singleTimes(number);
    } else {
        return parseInt(count / 3) * rule.threeTimes(number) + count % 3 * rule.singleTimes(number);
    }
}

module.exports = scoring;
