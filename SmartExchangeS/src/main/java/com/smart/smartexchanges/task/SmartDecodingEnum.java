/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.task;

/**
 *
 * @author Administrator
 */
public enum SmartDecodingEnum {

    utf8("UTF-8"), gbk("GBK"), gb2312("gb2312"), ascii("ASCII");

    private String describe;

    SmartDecodingEnum(String idx) {
        this.describe = idx;
    }

    public String getDescribe() {
        return describe;
    }

    @Override
    public String toString() {
        return describe;
    }
}
