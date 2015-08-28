/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.zst;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

/**
 *
 * @author Administrator
 */
public class LendRecordIbikResponseProcess implements Processor {
    
    @Override
    public void process(Exchange exchange) throws Exception {
        String strParam = exchange.getIn().getBody(String.class);
        System.out.println(strParam);
        exchange.getOut().setBody(strParam);
    }
    
}
