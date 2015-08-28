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
public class NearbyListIbikestationProcess implements Processor {

    @Override
    public void process(Exchange exchng) throws Exception {
        String str = exchng.getIn().getBody(String.class);
        System.out.println(str);
        TaskBicycleData.loadBicycleData();

        //解析参数，根据参数返回
        String paramKey_lat = "lat";
        String paramKey_lng = "lng";
        String paramKey_ride = "ride";

        Map<String, Object> paramMap = null;

        paramMap = new HashMap<String, Object>();

        paramMap.put(paramKey_lat, null);
        paramMap.put(paramKey_lng, null);
        paramMap.put(paramKey_ride, null);

        new AnalyzeParam().AnalyzeParamBodyToMap(str, paramMap);

        double doubleTempLat = 0, doubleTempLng = 0, paramLat = 0, paramLatPlus = 0, paramLng = 0, paramLngPlus = 0, paramRide = 0;
        paramLat = Double.parseDouble(common.UtileSmart.getStringFromMap(paramMap, paramKey_lat));
        paramLng = Double.parseDouble(common.UtileSmart.getStringFromMap(paramMap, paramKey_lng));
        paramRide = Double.parseDouble(common.UtileSmart.getStringFromMap(paramMap, paramKey_ride));

        if (paramLat == 0 || paramLng == 0 || paramRide == 0) {
            return;
        }
        paramLatPlus = paramLat + (paramRide * TaskBicycleData.LAT_CARDINAL);
        paramLngPlus = paramLng + (paramRide * TaskBicycleData.LAT_CARDINAL);
        paramLat -= (paramRide * TaskBicycleData.LAT_CARDINAL);
        paramLng -= (paramRide * TaskBicycleData.LAT_CARDINAL);

        JSONArray array = new JSONArray();
  
        for (JSONObject value : TaskBicycleData.bicycleMap) {
            doubleTempLat = Double.parseDouble(value.getString("lat"));
            doubleTempLng = Double.parseDouble(value.getString("lng"));

            // x表示当地的纬度lat,y表示当地的经度lng
            if (paramLng < doubleTempLng && doubleTempLng < paramLngPlus && paramLat < doubleTempLat && doubleTempLat < paramLatPlus) {
                array.add(value.getString("id"));
            }
        }

        JSONObject obj = new JSONObject();
        obj.accumulate(DeployInfo.ResultDataTag, array);
        String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        exchng.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
        exchng.getOut().setBody(resultStr);

    }

}
