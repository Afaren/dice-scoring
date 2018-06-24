const _ = require('lodash');

class Rule {
    constructor(singleTime, threeTimes) {
        this.singleTime = singleTime;
        this.threeTimes = threeTimes;
    }
}

const ruleOf1 = new Rule(number => 100, number => 1000);
const ruleOf5 = new Rule(number => 50, number => 500);
const ruleOfOther = new Rule(number => 0, number => number * 100);

const scoringRules = {
    '1': ruleOf1,
    '5': ruleOf5,
    '2': ruleOfOther,
    '3': ruleOfOther,
    '4': ruleOfOther,
    '6': ruleOfOther,
};

class ScoreCalculator {
    constructor(rules) {
        this.rules = rules;
    }

    calculate(number, count) {
        const rule = this.rules[number];
        if (count < 3) {
            return count * rule.singleTime(number);
        } else {
            return rule.threeTimes(number) + this.calculate(number, count - 3);
        }
    }

    static withRules(rules) {
        return new ScoreCalculator(rules);
    }
}


function scoring(...args) {
    return _.chain(args)
            .countBy()
            .entries()
            .map(([number, count]) => ScoreCalculator.withRules(scoringRules).calculate(number, count))
            .sum()
            .value();

}
module.exports = scoring;
