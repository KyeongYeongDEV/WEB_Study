package exrate;

import org.springframework.stereotype.Component;
import payment.ExRateProvider;

import java.io.IOException;
import java.math.BigDecimal;

@Component
public class SimpleExRateProvider implements ExRateProvider {
    @Override
    public BigDecimal getExrate(String currency) throws IOException {
        if (currency.equals("USD")) return BigDecimal.valueOf(1000);

        throw new IllegalArgumentException("지원되지 않는 통화입니다");
    }
}