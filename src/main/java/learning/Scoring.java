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
        if (length < 3) {
            return 0L;
        }
        return number * 100 + other(number, length - 3);
    }

    private static long five(long length) {
        if (length < 3) {
            return 50 * length;
        }
        return 500 + five(length - 3);
    }

    private static long one(long length) {
        if (length < 3) {
            return 100 * length;
        }
        return 1000 + one(length - 3);
    }
}
