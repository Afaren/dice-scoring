describe("DiceScoring", function () {
  const score = require('../lib/DiceScoring');

  it("test_score_of_an_empty_list_is_zero", function () {
    expect(score()).toEqual(0);
  });

  it("test_score_of_a_single_roll_of_5_is_50", function () {
    expect(score(5)).toEqual(50);
  });

  it("test_score_of_a_single_roll_of_1_is_100", function () {
    expect(score(1)).toEqual(100);
  });

  it("test_score_of_multiple_1s_and_5s_is_the_sum_of_individual_scores", function () {
    expect(score(1, 5, 5, 1)).toEqual(300);
  });

  it("test_score_of_single_2s_3s_4s_and_6s_are_zero", function () {
    expect(score(2, 3, 4, 6)).toEqual(0);
  });

  it("test_score_of_a_triple_1_is_1000", function () {
    expect(score(1, 1, 1)).toEqual(1000);
  });

  it("test_score_of_other_triples_is_100x", function () {
    expect(score(2, 2, 2)).toEqual(200);
    expect(score(3, 3, 3)).toEqual(300);
    expect(score(4, 4, 4)).toEqual(400);
    expect(score(5, 5, 5)).toEqual(500);
    expect(score(6, 6, 6)).toEqual(600);
  });

  it("test_score_of_mixed_is_sum", function () {
    expect(score(2, 5, 2, 2, 3)).toEqual(250);
    expect(score(5, 5, 5, 5)).toEqual(550);
    expect(score(1, 1, 1, 1)).toEqual(1100);
    expect(score(1, 1, 1, 1, 1)).toEqual(1200);
    expect(score(1, 1, 1, 5, 1)).toEqual(1150);
  });

  it("test_score_of_length_more_5", function () {
    expect(score(1, 1, 1, 1, 1, 1, 1)).toEqual(2100);
    expect(score(5, 5, 5, 5, 5, 5)).toEqual(1000);
    expect(score(3, 3, 3, 3, 3, 3)).toEqual(600);
    expect(score(3, 3, 3, 3, 3, 3, 3, 3, 3)).toEqual(900);
    expect(score(3, 3, 3, 2, 2, 2, 1, 1, 1)).toEqual(1500);
  });


});
