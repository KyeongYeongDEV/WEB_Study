package payment;

import exrate.WebApiExRateProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import payment.ExRateProvider;
import payment.ExRateProviderStub;
import payment.PaymentService;

import java.math.BigDecimal;

@Configuration
@ComponentScan
public class TestObjectFactory {
    @Bean
    public PaymentService paymentService() {
        return new PaymentService(exRateProvider());
    }
    @Bean
    public ExRateProvider exRateProvider(){
        return new ExRateProviderStub((BigDecimal.valueOf(1_000)));
    }
}