module.exports = class Rule {
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