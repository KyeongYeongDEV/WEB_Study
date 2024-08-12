package hello;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import payment.Sort;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class SortTest {
    Sort sort;

    @BeforeEach
    void beforeEach(){
        this.sort = new Sort();
    }
    @Test
    void sort(){
        // 준비


        //실행
        List<String> list = sort.sortByLength(Arrays.asList("aa", "b"));
        //검증
        Assertions.assertThat((list)).isEqualTo((List.of("b","aa")));
    }
    @Test
    void sort3Items(){
        // 준비

        //실행
        List<String> list = sort.sortByLength(Arrays.asList("aa", "ccc", "b"));
        //검증
        Assertions.assertThat((list)).isEqualTo((List.of("b","aa","ccc")));
    }

    @Test
    void sortAlreadySorted(){
        // 준비

        //실행
        List<String> list = sort.sortByLength(Arrays.asList("b","aa","ccc"));
        //검증
        Assertions.assertThat((list)).isEqualTo((List.of("b","aa","ccc")));
    }
}
