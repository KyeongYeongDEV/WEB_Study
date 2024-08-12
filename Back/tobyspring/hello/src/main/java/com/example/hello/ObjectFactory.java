package com.example.hello;

import exrate.CachedExRateProvider;
import payment.ExRateProvider;
import exrate.WebApiExRateProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import payment.PaymentService;

@Configuration
@ComponentScan
public class ObjectFactory {
    @Bean
    public PaymentService paymentService() {
        return new PaymentService(exRateProvider());
    }
    @Bean
    public ExRateProvider exRateProvider(){
        return new WebApiExRateProvider();
    }
}