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
        if (number == 1) {
            return one(count);
        }
        if (number == 5) {
            return five(count);
        }
        if (number == 2 || number == 3 || number == 4 || number == 6) {
            return other(number, count);
        }
        return 0L;
    }

    private static long other(Integer number, long length) {
        return new Rule(0, number * 100).calculate(length);
    }

    private static long five(long length) {
        return new Rule(50, 500).calculate(length);
    }

    private static long one(long length) {
        return new Rule(100, 1000).calculate(length);
    }


    static class Rule{
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
            return  threeTimesScoring + calculate(count - 3);
        }
    }
}
