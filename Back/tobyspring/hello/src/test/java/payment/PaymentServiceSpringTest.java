package payment;

import org.assertj.core.api.Assertions;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.Clock;
import java.time.LocalDateTime;

@ExtendWith(SpringExtension.class) //spring
@ContextConfiguration(classes = TestPaymentConfig.class) //spring
public class PaymentServiceSpringTest {
    //@Autowired BeanFactory beanFactory; //spring
    @Autowired PaymentService paymentService; // 위와 같이 가져와도 되지만 @Bean을 이렇게 가져와도 된다.
    @Autowired ExRateProviderStub exRateProviderStub;
    @Autowired Clock clock;

    @Test
    @DisplayName("prepare 메소드가 요구사항 3가지를 잘 충족했는지 검증")
    void convertedAmount() throws IOException {
        //위에 spring 코드를 이용해서 가져와주면 아래를 따로 선언 안 해줘도 된다.
        //BeanFactory beanFactory = new AnnotationConfigApplicationContext(ObjectFactory.class);
        //PaymentService paymentService = beanFactory.getBean(PaymentService.class);

        // exRate : 1000
        Payment payment = paymentService.prepare(1L, "USD", BigDecimal.TEN);

        Assertions.assertThat(payment.getExRate()).isEqualByComparingTo(BigDecimal.valueOf(1_000));
        Assertions.assertThat(payment.getConvertedAmount())
                .isEqualByComparingTo(BigDecimal.valueOf(10_000));

        // exRate : 500
        exRateProviderStub.setExRate(BigDecimal.valueOf(500));
        Payment payment2 = paymentService.prepare(1L, "USD", BigDecimal.TEN);
        Assertions.assertThat(payment2.getExRate()).isEqualByComparingTo(BigDecimal.valueOf(500));
        Assertions.assertThat(payment2.getConvertedAmount())
                .isEqualByComparingTo(BigDecimal.valueOf(5_000));

        // 원화환산금액 유효시간
//        Assertions.assertThat(payment.getValidUntil()).isAfter(LocalDateTime.now());
//        Assertions.assertThat(payment.getValidUntil()) .isBefore(LocalDateTime.now().plusMinutes(30));
    }
    @Test
    void validUntil() throws IOException {
        Payment payment = paymentService.prepare(1L, "USD", BigDecimal.TEN);

        //valid untill이 prepare() 30분 뒤로 설정 됐는가?
        LocalDateTime now = LocalDateTime.now(this.clock);
        LocalDateTime expectedValidUntil = now.plusMinutes(30);

        Assertions.assertThat(payment.getValidUntil()).isEqualTo(expectedValidUntil);
    }
    private static void testAmount(BigDecimal exRate, BigDecimal convertedAmount) throws IOException {

    }
}
