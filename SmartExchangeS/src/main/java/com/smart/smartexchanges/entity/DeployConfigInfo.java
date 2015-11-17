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

    public DeployConfigInfo(String deployRootPath) {
        this.deployRootPath = deployRootPath;
    }

    private String deployRootPath;

    public String getDelplyRootPath() {
        return deployRootPath;
    }

    public void setDelplyRootPath(String deployRootPath) {
        this.deployRootPath = deployRootPath;
    }

}
