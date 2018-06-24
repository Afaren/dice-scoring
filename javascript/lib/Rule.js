module.exports = class Rule {
    constructor(singleTime, threeTimes) {
        this.singleTimeScore = singleTime;
        this.threeTimesScore = threeTimes;
    }

    calculate(count) {
        if (count < 3) {
            return count * this.singleTimeScore;
        } else {
            return this.threeTimesScore + this.calculate(count - 3);
        }
    }

}