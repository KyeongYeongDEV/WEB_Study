package com.example.hello;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.concurrent.TimeUnit;

public class Client {
    public static void main(String[] args) throws IOException, InterruptedException {
        BeanFactory beanFactory = new AnnotationConfigApplicationContext(ObjectFactory.class);
        PaymentService paymentService = beanFactory.getBean(PaymentService.class);

        Payment payment = paymentService.prepare(100L,"USD", BigDecimal.valueOf(50.7));
        System.out.println("payment 1 : "+ payment);
        System.out.println("-------------\n");

        Payment payment2 = paymentService.prepare(100L,"USD", BigDecimal.valueOf(50.7));
        System.out.println("payment 2 :" + payment2);
        System.out.println("-------------\n");

        TimeUnit.SECONDS.sleep(3);

        Payment payment3 = paymentService.prepare(100L,"USD", BigDecimal.valueOf(50.7));
        System.out.println("payment 3 :" + payment3);
    }
}