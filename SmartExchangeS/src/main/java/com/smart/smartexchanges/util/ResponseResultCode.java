/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.util;

public enum ResponseResultCode {

    /**
     * 1000 标识base 错误 1200 标识文件系统错误信息
     *
     * 2000 标识 社区金融系统错误
     */
    Error("1000"), Success("0000"), ErrorSignToken("1002"), ErrorParam("1001"), ErrorBase64Error("1003"), ErrorDB("1004"), ErrorBase64ConvertFile("1005"),
    ErrorFileExist("1201"), ErrorFileRepeat("1202"),//文件关联关系重复
    ErrorFileType("1203"),//文件类型错误
    ErrorUserOrPwd("2002"), ErrorUserName("2003"), ErrorExistAccount("2004"), ErrorExistUser("2005"), ErrorUnExistAccount("2006"), ErrorExistAccountBind("2007");

    private String describe;

    ResponseResultCode(String idx) {
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
