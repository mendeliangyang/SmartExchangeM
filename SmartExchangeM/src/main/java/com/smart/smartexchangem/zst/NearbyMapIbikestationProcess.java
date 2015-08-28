/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.zst;

import com.smart.smartexchangem.zst.location.BycycleDataModel;
import com.smart.smartexchangem.zst.location.LocationDataAccessUtil;
import common.DeployInfo;
import common.FormationResult;
import common.UtileSmart;
import common.model.ExecuteResultParam;
import common.model.ResponseResultCode;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
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
       // System.out.println(str);

        //解析参数，根据参数返回
        String paramKey_lat = "lat";
        String paramKey_lng = "lng";
        String paramKey_level = "level";
        String paramKey_rideX = "rideX";
        String paramKey_rideY = "rideY";

        Map<String, Object> paramMap = null;

        paramMap = new HashMap<String, Object>();

        paramMap.put(paramKey_lat, null);
        paramMap.put(paramKey_lng, null);
        paramMap.put(paramKey_level, null);
        paramMap.put(paramKey_rideX, null);
        paramMap.put(paramKey_rideY, null);

        new AnalyzeParam().AnalyzeParamBodyToMap(str, paramMap);

        BigDecimal[] xy = LocationDataAccessUtil.GetXiangSuXY(UtileSmart.getStringFromMap(paramMap, paramKey_lat), UtileSmart.getStringFromMap(paramMap, paramKey_lng), Integer.parseInt(UtileSmart.getStringFromMap(paramMap, paramKey_level)));
        BigDecimal effectXR = new BigDecimal(xy[0].divide(new BigDecimal(256)).intValue()).add(new BigDecimal(UtileSmart.getStringFromMap(paramMap, paramKey_rideX)));
        BigDecimal effectYR = new BigDecimal(xy[1].divide(new BigDecimal(256)).intValue()).add(new BigDecimal(UtileSmart.getStringFromMap(paramMap, paramKey_rideY)));//new BigDecimal(2560000).add(xy[1]);
        BigDecimal effectXL = new BigDecimal(xy[0].divide(new BigDecimal(256)).intValue()).subtract(new BigDecimal(UtileSmart.getStringFromMap(paramMap, paramKey_rideX)));
        BigDecimal effectYL = new BigDecimal(xy[1].divide(new BigDecimal(256)).intValue()).subtract(new BigDecimal(UtileSmart.getStringFromMap(paramMap, paramKey_rideY)));
        JSONArray array = new JSONArray();
        JSONObject object = null;

        synchronized (TaskBicycleData.bicycleSet) {
            if (TaskBicycleData.bicycleSet != null) {
                for (BycycleDataModel bicycleSet : TaskBicycleData.bicycleSet) {
                    //，-1表示小于，0是等于，1是大于。
                    if (bicycleSet.getTileX() == null || bicycleSet.getTileY() == null || bicycleSet.getLevel() == null || bicycleSet.getLevel() != Integer.parseInt(UtileSmart.getStringFromMap(paramMap, paramKey_level))) {
                        continue;
                    }
                    // x表示当地的纬度lat,y表示当地的经度lng
                    if (bicycleSet.getTileX().compareTo(effectXL) == 1 && bicycleSet.getTileX().compareTo(effectXR) == -1
                            && bicycleSet.getTileY().compareTo(effectYL) == 1 && bicycleSet.getTileY().compareTo(effectYR) == -1) {
                        object = new JSONObject();
                        object.accumulate("id", bicycleSet.getId());
                        object.accumulate("x", bicycleSet.getTileX());
                        object.accumulate("y", bicycleSet.getTileY());
                        array.add(object);
                    } // x表示当地的纬度lat,y表示当地的经度lng
                }
            }
        }
        JSONObject obj = new JSONObject();

        obj.accumulate(DeployInfo.ResultDataTag, array);
        String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));

        exchng.getOut()
                .setHeader("Content-Type", "application/json;chatset='utf-8'");
        exchng.getOut()
                .setBody(resultStr);
    }

}
