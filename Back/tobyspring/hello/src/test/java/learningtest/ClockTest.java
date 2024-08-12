package learningtest;


import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.Clock;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

public class ClockTest {
   @Test
   void clock(){
       Clock clock = Clock.systemDefaultZone();

       //시간 두 개가 소수점 단위에서 조금의 차이가 있다
       LocalDateTime dt1 = LocalDateTime.now(clock);
       LocalDateTime dt2 = LocalDateTime.now(clock);

       Assertions.assertThat(dt2).isAfter(dt1);
   }

   @Test
    void fixedClock() {
       // 시간을 고정한 후 시간을 받아온다
       Clock clock = Clock.fixed(Instant.now(), ZoneId.systemDefault());

       LocalDateTime dt1 = LocalDateTime.now(clock);
       LocalDateTime dt2 = LocalDateTime.now(clock);

       LocalDateTime dt3 = LocalDateTime.now(clock).plusHours(1);

       Assertions.assertThat(dt1).isEqualTo(dt2);
       Assertions.assertThat(dt3).isEqualTo((dt1.plusHours(1)));
    }
}
