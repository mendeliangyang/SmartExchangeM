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
import common.model.ExecuteResultParam;
import common.model.ResponseResultCode;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;
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

    public static Set<BycycleDataModel> bicycleSet = null;

    private static String bicycleDataPath = null;

    public static String getBicycleDataPath() throws Exception {
        if (bicycleDataPath == null) {
            bicycleDataPath = new StringBuffer().append(common.DeployInfo.GetDelplyRootPath())
                    .append(File.separator).append("WEB-INF").append(File.separator).append("zstData")
                    .append(File.separator).append("bicycle.json").toString();
        }
        return bicycleDataPath;
    }

    public static String getBicycleXYDataPath() throws Exception {
        if (bicycleDataPath == null) {
            bicycleDataPath = new StringBuffer().append(common.DeployInfo.GetDelplyRootPath())
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
        exec.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {

                try {
                    HttpClient httpClient = new HttpClient();
                    PostMethod postMethod = new PostMethod("http://zsbicycle.com/zsbicycle/zsmap/ibikestation.asp");
                    postMethod.getParams().setContentCharset("utf-8"); //The line I added
                    postMethod.setRequestHeader("accept-charset", "UTF-8");
                    httpClient.executeMethod(postMethod);

                    String resp = null, tempAddress = null;
                    if (postMethod.getStatusCode() == HttpStatus.SC_OK) {

                        resp = postMethod.getResponseBodyAsString();
                        resp = resp.substring(11, resp.length());
//                        if (bicycleSet != null) {
//                            bicycleSet.clear();
//                        }
//                        bicycleSet = LocationDataAccessUtil.LocationDataAccess(resp);

                        JSONObject obj = JSONObject.fromObject(resp);
                        JSONArray jsonArray = obj.getJSONArray("station");
                        JSONObject tempJsonObj = null;

//                        bicycleMap.clear();
                        boolean dataChangedFlag = false;
                        Set<JSONObject> bicycleMapTemp = new HashSet<>();
                        for (Object tempobj : jsonArray) {
                            tempJsonObj = JSONObject.fromObject(tempobj);
                            if (Double.parseDouble(tempJsonObj.getString("lat")) == 0 || Double.parseDouble(tempJsonObj.getString("lng")) == 0) {
                                continue;
                            }
//                            tempJsonObj.replace("lat", String.format("%.6f", (Double.parseDouble(tempJsonObj.getString("lat")) + LAT_ADD)));
//                            tempJsonObj.replace("lng", String.format("%.6f", (Double.parseDouble(tempJsonObj.getString("lng")) + LON_ADD)));

                            if (bicycleMap.size() == 0) {
                                dataChangedFlag = true;
                                tempAddress = GetHttpService(String.format("http://api.map.baidu.com/geocoder/v2/?ak=oMRm57DO72b40xgD1HABmwNd&location=%s,%s&output=json&pois=0", tempJsonObj.getString("lat"), tempJsonObj.getString("lng")));
                                if (tempAddress != null) {
                                    JSONObject jsonAddress = JSONObject.fromObject(tempAddress);
                                    if (jsonAddress.getString("status").equals("0")) {
                                        tempJsonObj.replace("address", jsonAddress.getJSONObject("result").getString("formatted_address"));
                                    }
                                }
                            } else {
                                for (JSONObject value : bicycleMap) {
                                    if (value.getString("id").equals(tempJsonObj.getString("id"))) {
                                        if (value.getString("lat").equals(tempJsonObj.getString("lat")) && value.getString("lng").equals(tempJsonObj.getString("lng"))) {
                                            tempJsonObj.replace("address", value.getString("address"));
//                                            tempJsonObj.accumulate("address", value.getString("address"));
                                        } else {
                                            dataChangedFlag = true;
                                            //掉百度api获取address
                                            tempAddress = GetHttpService(String.format("http://api.map.baidu.com/geocoder/v2/?ak=oMRm57DO72b40xgD1HABmwNd&location=%s,%s&output=json&pois=0", tempJsonObj.getString("lat"), tempJsonObj.getString("lng")));
                                            if (tempAddress != null) {
                                                JSONObject jsonAddress = JSONObject.fromObject(tempAddress);
                                                if (jsonAddress.getString("status").equals("0")) {
                                                    tempJsonObj.replace("address", jsonAddress.getJSONObject("result").getString("formatted_address"));
//                                                tempJsonObj.accumulate("address", jsonAddress.getJSONObject("result").getString("formatted_address"));
                                                }
                                            }

                                        }
                                        break;
                                    }
                                }
                            }
                            bicycleMapTemp.add(tempJsonObj);
                        }

                        // 数据变动，写数据到bicycle.json
                        if (dataChangedFlag) {
                            bicycleMap.clear();
                            bicycleMap = bicycleMapTemp;
                            bicycleMapTemp = null;
                            common.UtileSmart.writeFile(getBicycleDataPath(), bicycleMap.toString(), "utf-8");
//                            common.UtileSmart.writeFile(getBicycleXYDataPath(), com.alibaba.fastjson.JSON.toJSON(bicycleSet).toString(), "utf-8");
                        }
                    }
                } catch (HttpException e) {
                    System.out.println("TimingBrushBicycleData httpExcepiton" + e.getLocalizedMessage());
                    common.RSLogger.ErrorLogInfo("TimingBrushBicycleData httpExcepiton " + e.getLocalizedMessage(), e);
                } catch (IOException e) {
                    System.out.println("TimingBrushBicycleData IOException " + e.getLocalizedMessage());
                    common.RSLogger.ErrorLogInfo("TimingBrushBicycleData IOException " + e.getLocalizedMessage(), e);
                } catch (Exception ex) {
                    System.out.println("TimingBrushBicycleData Exception " + ex.getLocalizedMessage());
                    common.RSLogger.ErrorLogInfo("TimingBrushBicycleData Exception " + ex.getLocalizedMessage(), ex);
                }

            }
        }, 1, 300, TimeUnit.SECONDS);
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

    private static String GetHttpService(String url) {
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
            String bicycleStr = common.UtileSmart.readFile(getBicycleDataPath(), "utf-8");
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
            common.RSLogger.ErrorLogInfo("laod bicycleData error ." + e.getLocalizedMessage(), e);
            throw new Exception("laod bicycleData error ." + e.getLocalizedMessage());
        }
    }

    public static void writeBicycleData() throws Exception {

    }

}
