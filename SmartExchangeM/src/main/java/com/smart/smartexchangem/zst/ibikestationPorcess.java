/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.zst;

import common.DeployInfo;
import common.FormationResult;
import common.model.ExecuteResultParam;
import common.model.ResponseResultCode;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;

/**
 *
 * @author Administrator
 */
public class ibikestationPorcess implements Processor {

    @Override
    public void process(Exchange exchng) throws Exception {
        String str = exchng.getIn().getBody(String.class);
        System.out.println(str);


        exchng.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");

        JSONArray array = new JSONArray();
        for (JSONObject bucycleKey : TaskBicycleData.bicycleMap) {
            array.add(bucycleKey);
        }

        JSONObject obj = new JSONObject();
        obj.accumulate(DeployInfo.ResultDataTag, array);
        String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        exchng.getOut().setBody(resultStr);

    }

}
