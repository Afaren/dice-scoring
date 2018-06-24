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
    return _.chain(args)
            .countBy()
            .entries()
            .map(([number, count]) => calculateTimes(number, count))
            .sum()
            .value();

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
