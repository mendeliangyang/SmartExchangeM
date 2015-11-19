/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.config;

import com.smart.smartexchanges.entity.DeployConfigInfo;
import java.io.File;
import javax.annotation.Resource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author Administrator
 */
@Configuration
@EnableWebMvc
@EnableScheduling
@PropertySource("classpath:service.properties")
public class DeployConfig {

    @Resource
    private Environment env;

    @Bean
    public DeployConfigInfo generalWebConfig() {
        
        return new DeployConfigInfo(env.getProperty("proxyService"),env.getProperty("ibikestationService"),env.getProperty("houseService"));
    }
}
