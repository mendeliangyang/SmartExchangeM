/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg;

import com.smart.common.RSLogger;
import com.smart.common.UtileSmart;
import com.smart.common.model.SmartDecodingEnum;
import static com.smart.smartexchangeg.TaskBicycleData.bicycleMap;
import com.smart.smartexchangeg.calc.CalcLocation;
import java.io.IOException;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;

/**
 *
 * @author Administrator
 */
public class AutoTaskBicycleData implements Runnable {

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

                JSONObject obj = null;
                JSONArray jsonArray = null;
                try {

                    obj = JSONObject.fromObject(resp);
                    jsonArray = obj.getJSONArray("station");
                } catch (Exception e) {
                    System.out.println("TimingBrushBicycleData Analyze json Exception " + e.getLocalizedMessage());
                    RSLogger.ErrorLogInfo("TimingBrushBicycleData Analyze json Exception " + e.getLocalizedMessage(), e);
                }
                if (obj == null || jsonArray == null) {
                    jsonArray = bicycleMap;
//                    return;
                }

                JSONObject tempJsonObj = null;
                boolean dataChangedFlag = true;
                JSONArray bicycleMapTemp = new JSONArray();
                for (Object tempobj : jsonArray) {
                    tempJsonObj = JSONObject.fromObject(tempobj);
                    if (Double.parseDouble(tempJsonObj.getString("lat")) == 0 || Double.parseDouble(tempJsonObj.getString("lng")) == 0) {
                        continue;
                    }
                    tempJsonObj.replace("lat", String.format("%.6f", (Double.parseDouble(tempJsonObj.getString("lat")) + TaskBicycleData.LAT_ADD)));
                    tempJsonObj.replace("lng", String.format("%.6f", (Double.parseDouble(tempJsonObj.getString("lng")) + TaskBicycleData.LON_ADD)));
// 以前返回数据address中没有数据调用baidu MapApi ，得到address
//                    if (bicycleMap.size() == 0) {
//                        dataChangedFlag = true;
//                        tempAddress = TaskBicycleData.GetHttpService(String.format("http://api.map.baidu.com/geocoder/v2/?ak=oMRm57DO72b40xgD1HABmwNd&location=%s,%s&output=json&pois=0", tempJsonObj.getString("lat"), tempJsonObj.getString("lng")));
//                        if (tempAddress != null) {
//                            JSONObject jsonAddress = JSONObject.fromObject(tempAddress);
//                            if (jsonAddress.getString("status").equals("0")) {
//                                tempJsonObj.replace("address", jsonAddress.getJSONObject("result").getString("formatted_address"));
//                            }
//                        }
//                    } else {
////                        for (JSONObject value : bicycleMap) {
//                        for (Object valueObject : bicycleMap) {
//                            JSONObject value = JSONObject.fromObject(valueObject);
//                            if (value.getString("id").equals(tempJsonObj.getString("id"))) {
//                                if (value.getString("lat").equals(tempJsonObj.getString("lat")) && value.getString("lng").equals(tempJsonObj.getString("lng"))) {
//                                    tempJsonObj.replace("address", value.getString("address"));
////                                            tempJsonObj.accumulate("address", value.getString("address"));
//                                } else {
//                                    dataChangedFlag = true;
//                                    //掉百度api获取address
//                                    tempAddress = TaskBicycleData.GetHttpService(String.format("http://api.map.baidu.com/geocoder/v2/?ak=oMRm57DO72b40xgD1HABmwNd&location=%s,%s&output=json&pois=0", tempJsonObj.getString("lat"), tempJsonObj.getString("lng")));
//                                    if (tempAddress != null) {
//                                        JSONObject jsonAddress = JSONObject.fromObject(tempAddress);
//                                        if (jsonAddress.getString("status").equals("0")) {
//                                            tempJsonObj.replace("address", jsonAddress.getJSONObject("result").getString("formatted_address"));
////                                                tempJsonObj.accumulate("address", jsonAddress.getJSONObject("result").getString("formatted_address"));
//                                        }
//                                    }
//
//                                }
//                                break;
//                            }
//                        }
//                    }
                    bicycleMapTemp.add(tempJsonObj);
                }

                // 数据变动，写数据到bicycle.json
                if (dataChangedFlag) {
                    bicycleMap.clear();
                    bicycleMap = bicycleMapTemp;
                    bicycleMapTemp = null;
                    UtileSmart.writeFile(TaskBicycleData.getBicycleDataPath(), bicycleMap.toString(), SmartDecodingEnum.utf8);
                    JSONObject resultObject = CalcLocation.LocationDataAccess1(bicycleMap, "lat", "lng");
                    UtileSmart.writeFile(TaskBicycleData.getBicycleXYDataPath(), resultObject.toString(), SmartDecodingEnum.utf8);
                    RSLogger.LogInfo("TimingBrushBicycleData dataChanged. ");
                }
            }
        } catch (HttpException e) {
            System.out.println("TimingBrushBicycleData httpExcepiton" + e.getLocalizedMessage());
            RSLogger.ErrorLogInfo("TimingBrushBicycleData httpExcepiton " + e.getLocalizedMessage(), e);
        } catch (IOException e) {
            System.out.println("TimingBrushBicycleData IOException " + e.getLocalizedMessage());
            RSLogger.ErrorLogInfo("TimingBrushBicycleData IOException " + e.getLocalizedMessage(), e);
        } catch (Exception ex) {
            System.out.println("TimingBrushBicycleData Exception " + ex.getLocalizedMessage());
            RSLogger.ErrorLogInfo("TimingBrushBicycleData Exception " + ex.getLocalizedMessage(), ex);
        }

    }

}
