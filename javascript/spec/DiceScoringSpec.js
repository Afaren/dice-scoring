describe("DiceScoring", function () {
  const score = require('../lib/DiceScoring');

  it("test score of an empty list is zero", function () {
    expect(score()).toEqual(0);
  });

  it("test score of a single roll of 5 is 50", function () {
    expect(score(5)).toEqual(50);
  });

  it("test score of a single roll of 1 is 100", function () {
    expect(score(1)).toEqual(100);
  });

  it("test score of multiple 1s and 5s is the sum of individual scores", function () {
    expect(score(1, 5, 5, 1)).toEqual(300);
  });

  it("test score of single 2s 3s 4s and 6s are zero", function () {
    expect(score(2, 3, 4, 6)).toEqual(0);
  });

  it("test score of a triple 1 is 1000", function () {
    expect(score(1, 1, 1)).toEqual(1000);
  });

  it("test score of other triples is 100x", function () {
    expect(score(2, 2, 2)).toEqual(200);
    expect(score(3, 3, 3)).toEqual(300);
    expect(score(4, 4, 4)).toEqual(400);
    expect(score(5, 5, 5)).toEqual(500);
    expect(score(6, 6, 6)).toEqual(600);
  });

  it("test score of mixed is sum", function () {
    expect(score(2, 5, 2, 2, 3)).toEqual(250);
    expect(score(5, 5, 5, 5)).toEqual(550);
    expect(score(1, 1, 1, 1)).toEqual(1100);
    expect(score(1, 1, 1, 1, 1)).toEqual(1200);
    expect(score(1, 1, 1, 5, 1)).toEqual(1150);
  });

  it("test score of length more 5", function () {
    expect(score(1, 1, 1, 1, 1, 1, 1)).toEqual(2100);
    expect(score(5, 5, 5, 5, 5, 5)).toEqual(1000);
    expect(score(3, 3, 3, 3, 3, 3)).toEqual(600);
    expect(score(3, 3, 3, 3, 3, 3, 3, 3, 3)).toEqual(900);
    expect(score(3, 3, 3, 2, 2, 2, 1, 1, 1)).toEqual(1500);
  });

  it("should not throw when dice number is legal", function () {
    expect(() => score(1)).not.toThrow();
    expect(() => score(2)).not.toThrow();
    expect(() => score(3)).not.toThrow();
    expect(() => score(4)).not.toThrow();
    expect(() => score(5)).not.toThrow();
    expect(() => score(6)).not.toThrow();
  });

  it("should throw error when dice number is illegal", function () {
    expect(() => score(0)).toThrow(new Error('number: [0] is illegal'));
    expect(() => score(7)).toThrow(new Error('number: [7] is illegal'));
  });

});
