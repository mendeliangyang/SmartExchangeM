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
import java.util.HashMap;
import java.util.Map;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;

/**
 *
 * @author Administrator
 */
public class NearbyMapIbikestationProcess implements Processor {

    @Override
    public void process(Exchange exchng) throws Exception {
        String str = exchng.getIn().getBody(String.class);
        System.out.println(str);
        TaskBicycleData.loadBicycleData();

        //解析参数，根据参数返回
        String paramKey_lat = "lat";
        String paramKey_lng = "lng";

        Map<String, Object> paramMap = null;

        paramMap = new HashMap<String, Object>();

        paramMap.put(paramKey_lat, null);
        paramMap.put(paramKey_lng, null);
        JSONArray array = new JSONArray();
        for (String bucycleKey : TaskBicycleData.bicycleMap.keySet()) {
            array.add(TaskBicycleData.bicycleMap.get(bucycleKey));
        }

        JSONObject obj = new JSONObject();
        obj.accumulate(DeployInfo.ResultDataTag, array);
        String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));

        exchng.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
        exchng.getOut().setBody(TaskBicycleData.bicycleMap);
    }

}
