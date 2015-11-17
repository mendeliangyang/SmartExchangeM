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
@PropertySource("classpath:properties/deploy.properties")
public class DeployConfig {

    @Resource
    private Environment env;

    @Bean
    public DeployConfigInfo generalWebConfig() {
        StringBuffer sb = new StringBuffer();
        String DeployRootPath = DeployConfig.class.getProtectionDomain().getCodeSource().getLocation().getPath();
        DeployRootPath = DeployRootPath.substring(1, DeployRootPath.indexOf("WEB-INF"));
        DeployRootPath = sb.append(File.separator).append(DeployRootPath).toString();

        return new DeployConfigInfo(DeployRootPath);
    }
}
