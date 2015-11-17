/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.util;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class ExecuteResultParam {

    public String ResultDataTag = "resultDatas";

    public ExecuteResultParam() {
    }

    public ExecuteResultParam(int pCode) {
        this.ResultCode = pCode;
    }

    public ExecuteResultParam(int pCode, String pErrMsg) {
        this.ResultCode = pCode;
        this.errMsg = pErrMsg;
    }

    public ExecuteResultParam(int pCode, String pErrMsg, JSONObject jsonObject) {
        this.ResultCode = pCode;
        this.errMsg = pErrMsg;
        this.ResultJsonObject = jsonObject;
    }

    public ExecuteResultParam(JSONObject jsonObject) {
        this.ResultJsonObject = jsonObject;
    }

    public ExecuteResultParam(Map<String, Map<String, String>> resultMap, boolean isArray) {
        JSONArray array = new JSONArray();
        for (Iterator<String> iterator = resultMap.keySet().iterator(); iterator.hasNext();) {
            String next = iterator.next();
            array.add(JSONObject.fromObject(resultMap.get(next)));
        }
        JSONObject obj = new JSONObject();
        obj.accumulate(ResultDataTag, array);
        this.ResultJsonObject = obj;
    }

    public ExecuteResultParam(List<Map<String, String>> resultMap, boolean isArray) {
        JSONArray array = new JSONArray();
        for (Map<String, String> resultMap1 : resultMap) {
            array.add(JSONObject.fromObject(resultMap1));
        }
        JSONObject obj = new JSONObject();
        obj.accumulate(ResultDataTag, array);
        this.ResultJsonObject = obj;
    }

    public ExecuteResultParam(List<Map<String, String>> resultMap, String rowsCount, boolean isArray) {
        JSONArray array = new JSONArray();
        for (Map<String, String> resultMap1 : resultMap) {
            array.add(JSONObject.fromObject(resultMap1));
        }
        JSONObject obj = new JSONObject();
        obj.accumulate(ResultDataTag, array);
        obj.accumulate("rowsCount", rowsCount);
        this.ResultJsonObject = obj;
    }

    public ExecuteResultParam(String pErrMsg, String pExecuteStr) {
        this.errMsg = pErrMsg;
        this.executeStr = pExecuteStr;
    }

    public ExecuteResultParam(String pErrMsg, String pExecuteStr, Exception pException) {
        this.errMsg = pErrMsg;
        this.executeStr = pExecuteStr;
        this.exception = pException;
    }

    public JSONObject ResultJsonObject;
    public int ResultCode;
    public String errMsg;
    public Exception exception;
    public String executeStr;

}
