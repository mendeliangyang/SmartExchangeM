/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.entity;

/**
 *
 * @author Administrator
 */
public class DeployConfigInfo {

    public DeployConfigInfo() {
    }

    public DeployConfigInfo(String proxyService, String ibikestationService, String houseService) {
        this.houseService = houseService;
        this.proxyService = proxyService;
        this.ibikestationService = ibikestationService;

    }

    private String proxyService;
    private String ibikestationService;
    private String houseService;

    public String getProxyService() {
        return proxyService;
    }

    public void setProxyService(String proxyService) {
        this.proxyService = proxyService;
    }

    public String getIbikestationService() {
        return ibikestationService;
    }

    public void setIbikestationService(String ibikestationService) {
        this.ibikestationService = ibikestationService;
    }

    public String getHouseService() {
        return houseService;
    }

    public void setHouseService(String houseService) {
        this.houseService = houseService;
    }

}
