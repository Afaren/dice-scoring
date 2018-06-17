package learning;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static learning.Scoring.score;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ScoringTest {
    @Test
    void test_score_of_an_empty_list_is_zero() {
        Assertions.assertEquals(0, score());
    }

    @Test
    void test_score_of_a_single_roll_of_5_is_50() {
        Assertions.assertEquals(50, score(5));
    }

    @Test
    void test_score_of_a_single_roll_of_1_is_100() {
        Assertions.assertEquals(100, score(1));
    }

    @Test
    void test_score_of_multiple_1s_and_5s_is_the_sum_of_individual_scores() {
        Assertions.assertEquals(300, score(1, 5, 5, 1));
    }

    @Test
    void test_score_of_single_2s_3s_4s_and_6s_are_zero() {
        Assertions.assertEquals(0, score(2, 3, 4, 6));
    }

    @Test
    void test_score_of_a_triple_1_is_1000() {
        Assertions.assertEquals(1000, score(1, 1, 1));
    }

    @Test
    void test_score_of_other_triples_is_100x() {
        Assertions.assertEquals(200, score(2, 2, 2));
        Assertions.assertEquals(300, score(3, 3, 3));
        Assertions.assertEquals(400, score(4, 4, 4));
        Assertions.assertEquals(500, score(5, 5, 5));
        Assertions.assertEquals(600, score(6, 6, 6));
    }

    @Test
    void test_score_of_mixed_is_sum() {
        Assertions.assertEquals(250, score(2, 5, 2, 2, 3));
        Assertions.assertEquals(550, score(5, 5, 5, 5));
        Assertions.assertEquals(1100, score(1, 1, 1, 1));
        Assertions.assertEquals(1200, score(1, 1, 1, 1, 1));
        Assertions.assertEquals(1150, score(1, 1, 1, 5, 1));
    }

}
