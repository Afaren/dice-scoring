package learning;

import java.util.Arrays;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Scoring {
    public static long score(Integer... dices) {
        return Arrays.stream(dices)
                     .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
                     .entrySet()
                     .stream()
                     .mapToLong(x -> calculate(x.getKey(), x.getValue()))
                     .sum();
    }

    private static long calculate(Integer number, Long count) {
       return RuleFactory.create(number).calculate(count);
    }


    static class Rule {
        private final int singleTimeScoring;
        private final int threeTimesScoring;

        Rule(int singleTimeScoring, int threeTimesScoring) {
            this.singleTimeScoring = singleTimeScoring;
            this.threeTimesScoring = threeTimesScoring;
        }


        long calculate(long count) {
            if (count < 3) {
                return singleTimeScoring * count;
            }
            return threeTimesScoring + calculate(count - 3);
        }
    }

    private static class RuleFactory {
        public static Rule create(Integer number) {
            if (number == 1) {
                return new Rule(100, 1000);
            }
            if (number == 5) {
                return new Rule(50, 500);
            }
            if (number == 2 || number == 3 || number == 4 || number == 6) {
                return new Rule(0, number * 100);
            }
            throw new IllegalArgumentException("illegal number");
        }
    }
}
