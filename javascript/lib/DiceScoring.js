const _ = require('lodash');

class Rule {
    constructor(singleTime, threeTimes) {
        this.singleTimeScore = singleTime;
        this.threeTimesScore = threeTimes;
    }

    calculate(number, count) {
        if (count < 3) {
            return count * this.singleTimeScore;
        } else {
            return this.threeTimesScore(number) + this.calculate(number, count - 3);
        }
    }

}

const ruleOf1 = new Rule(100, number => 1000);
const ruleOf5 = new Rule(50, number => 500);
const ruleOfOther = new Rule(0, number => number * 100);

const ScoringRules = {
    '1': ruleOf1,
    '5': ruleOf5,
    '2': ruleOfOther,
    '3': ruleOfOther,
    '4': ruleOfOther,
    '6': ruleOfOther,
};

function scoring(...args) {
    return _.chain(args)
            .countBy()
            .entries()
            .map(([number, count]) => ScoringRules[number].calculate(number, count))
            .sum()
            .value();

}
module.exports = scoring;
