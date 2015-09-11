/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg;

import com.smart.common.DeployInfo;
import com.smart.common.RSLogger;
import com.smart.common.UtileSmart;
import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;

/**
 *
 * @author Administrator
 */
public class TaskBicycleData {

    // 距离系数,每1000米的距离经纬度变化量,此系数是以中山市中心点为参考,[经度，纬度]
    //var pointRatio = [0.009736, 0.008993];
    public final static double LNG_CARDINAL = 0.009736;
    public final static double LAT_CARDINAL = 0.008993;
    public final static double LON_ADD = 0.006450;//自行车站点经度偏移量
    public final static double LAT_ADD = 0.005983;//自行车站点纬度偏移量
    //生成根据 id，经纬度生成唯一标识
    //从百度map api上根据经纬度查询 address
    //保存本地json
    public static Set<JSONObject> bicycleMap = new HashSet<>();

//    public static Set<BycycleDataModel> bicycleSet = null;
    private static String bicycleDataPath = null;

    public static String getBicycleDataPath() throws Exception {
        if (bicycleDataPath == null) {
            bicycleDataPath = new StringBuffer().append(DeployInfo.GetDelplyRootPath())
                    .append(File.separator).append("WEB-INF").append(File.separator).append("zstData")
                    .append(File.separator).append("bicycle.json").toString();
        }
        return bicycleDataPath;
    }

    public static String getBicycleXYDataPath() throws Exception {
        if (bicycleDataPath == null) {
            bicycleDataPath = new StringBuffer().append(DeployInfo.GetDelplyRootPath())
                    .append(File.separator).append("WEB-INF").append(File.separator).append("zstData")
                    .append(File.separator).append("bicycleXY.json").toString();
        }
        return bicycleDataPath;
    }

    public static void TimingBrushBicycleData() {
        try {

            TaskBicycleData.loadBicycleData();
        } catch (Exception e) {
            e.printStackTrace();
        }

        ScheduledThreadPoolExecutor exec = new ScheduledThreadPoolExecutor(1);
        exec.scheduleAtFixedRate(new AutoTaskBicycleData(), 1, 300, TimeUnit.SECONDS);
    }

    private static String PostHttpService(String url, Map<String, String> postData) throws Exception {
        HttpClient httpClient = new HttpClient();
        PostMethod postMethod = new PostMethod(url);
        for (String keySet : postData.keySet()) {
            postMethod.addParameter(keySet, postData.get(keySet));
        }

        httpClient.executeMethod(postMethod);
        if (postMethod.getStatusCode() == HttpStatus.SC_OK) {

            return postMethod.getResponseBodyAsString();
        }
        return null;
    }

    public static String GetHttpService(String url) {
        HttpClient httpClient = new HttpClient();
        GetMethod getMethod = new GetMethod(url);
        try {
            httpClient.executeMethod(getMethod);
            if (getMethod.getStatusCode() == HttpStatus.SC_OK) {
                return getMethod.getResponseBodyAsString();
            }
        } catch (IOException ex) {
            System.out.println(ex.getLocalizedMessage());
        }
        return null;
    }

    public static void loadBicycleData() throws Exception {

        try {
            String bicycleStr = UtileSmart.readFile(getBicycleDataPath(), "utf-8");
            //common.UtileSmart.cleanMapTDString(bicycleMap);
            bicycleMap.clear();
            JSONArray bicycleArray = JSONArray.fromObject(bicycleStr);
            JSONObject jsonObject = null;
            for (Object bicycleArray1 : bicycleArray) {
                jsonObject = JSONObject.fromObject(bicycleArray1);
                //判断数据正确性
                if (Double.parseDouble(jsonObject.getString("lat")) == 0 || Double.parseDouble(jsonObject.getString("lng")) == 0) {
                    continue;
                }

                bicycleMap.add(jsonObject);
            }

        } catch (Exception e) {
            RSLogger.ErrorLogInfo("laod bicycleData error ." + e.getLocalizedMessage(), e);
            throw new Exception("laod bicycleData error ." + e.getLocalizedMessage());
        }
    }

    public static void writeBicycleData() throws Exception {

    }

}
