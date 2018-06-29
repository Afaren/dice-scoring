const _ = require('lodash');
const Rule = require('./Rule');

const ruleOf1 = new Rule(100, 1000);
const ruleOf5 = new Rule(50, 500);
const ruleOf2 = new Rule(0, 200);
const ruleOf3 = new Rule(0, 300);
const ruleOf4 = new Rule(0, 400);
const ruleOf6 = new Rule(0, 600);

const ScoringRules = {
    '1': ruleOf1,
    '5': ruleOf5,
    '2': ruleOf2,
    '3': ruleOf3,
    '4': ruleOf4,
    '6': ruleOf6,
};

function validate(args) {
    if (_.isEmpty(args)) {
        return;
    }
    const illegalNumbers = _.filter(args, x => x < 1 || x > 6);
    if (!_.isEmpty(illegalNumbers)) {
        throw new Error(`number: [${illegalNumbers}] is illegal`);
    }
}

function scoring(...args) {
    validate(args);
    return _.chain(args)
            .countBy()
            .entries()
            .map(([number, count]) => ScoringRules[number].calculate(count))
            .sum()
            .value();

}

module.exports = scoring;
