/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.zst;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class TaskBicycleData {

    // 距离系数,每1000米的距离经纬度变化量,此系数是以中山市中心点为参考,[经度，纬度]
    //var pointRatio = [0.009736, 0.008993];
    public final static double LNG_CARDINAL = 0.009736;
    public final static double LAT_CARDINAL = 0.008993;
    
    //生成根据 id，经纬度生成唯一标识
    //从百度map api上根据经纬度查询 address
    //保存本地json
    public static Map<String, JSONObject> bicycleMap = new HashMap<>();

    private static String bicycleDataPath = null;

    public static String getBicycleDataPath() throws Exception {
        if (bicycleDataPath == null) {
            bicycleDataPath = new StringBuffer().append(common.DeployInfo.GetDelplyRootPath())
                    .append(File.separator).append("WEB-INF").append(File.separator).append("zstData")
                    .append(File.separator).append("bicycle.json").toString();
        }
        return bicycleDataPath;
    }

    public static void loadBicycleData() throws Exception {

        try {
            String bicycleStr = common.UtileSmart.readFile(getBicycleDataPath(), "utf-8");
            //common.UtileSmart.cleanMapTDString(bicycleMap);
            bicycleMap.clear();
            JSONArray bicycleArray = JSONArray.fromObject(bicycleStr);
            String tempKey = null;
            JSONObject jsonObject = null;
            for (Object bicycleArray1 : bicycleArray) {
                jsonObject = JSONObject.fromObject(bicycleArray1);
                //判断数据正确性
                if (Double.parseDouble(jsonObject.getString("lat")) == 0 || Double.parseDouble(jsonObject.getString("lng")) == 0) {
                    continue;
                }
                tempKey = new StringBuffer().append(jsonObject.getString("id")).append("&lat").append(jsonObject.getString("lat")).append("&lng").append(jsonObject.getString("lng")).toString();
                bicycleMap.put(tempKey, jsonObject);
            }

        } catch (Exception e) {
            common.RSLogger.ErrorLogInfo("laod bicycleData error ." + e.getLocalizedMessage(), e);
            throw new Exception("laod bicycleData error ." + e.getLocalizedMessage());
        }
    }

    public static void writeBicycleData() throws Exception {

    }

}
