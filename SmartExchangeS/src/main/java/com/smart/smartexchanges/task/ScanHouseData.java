/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.task;

import com.smart.smartexchanges.calc.CSVUtils;
import com.smart.smartexchanges.calc.CalcLocation;
import com.smart.smartexchanges.entity.DeployConfigInfo;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

/**
 *
 * @author Administrator
 */
//@EnableScheduling
@Component
public class ScanHouseData {

    @Resource
    DeployConfigInfo deployConfigInfo;

    @Scheduled(fixedRate = 420000)
    public void scan() {
        HttpClient httpClient = new HttpClient();
//        PostMethod postMethod = new PostMethod("http://218.204.174.24:8052/ZST/house/getNewHouseData?beginDate=1997-01-01&endDate=2020-01-01");

        PostMethod postMethod = new PostMethod(deployConfigInfo.getHouseService());
        try {
            httpClient.executeMethod(postMethod);
            String resp = null;
            if (postMethod.getStatusCode() == HttpStatus.SC_OK) {
                resp = postMethod.getResponseBodyAsString();
                //解析数据
                JSONObject jsonObj = JSONObject.fromObject(resp);
                JSONArray array = jsonObj.getJSONArray("data");
                UtileSmart.writeFile(TaskBicycleData.getHouseDataPath(), array.toString(), SmartDecodingEnum.utf8);
                JSONObject resultObject = CalcLocation.LocationDataAccess1(array, "lat", "lng");
                UtileSmart.writeFile(TaskBicycleData.getHousexyDataPath(), resultObject.toString(), SmartDecodingEnum.utf8);

                JSONArray jsonArray19 = resultObject.getJSONArray("19");
                LinkedHashMap map = new LinkedHashMap();
                map.put("1", "title");
                map.put("2", "address");
                map.put("3", "longitude");
                map.put("4", "latitude");
                map.put("5", "coord_type");
                map.put("6", "estate_id");
                map.put("7", "estate_type");
                List exportData = new ArrayList<Map>();
                JSONObject jsonTemp = null;
                Map rowTemp = null;
                for (Object jsonArray191 : jsonArray19) {
                    jsonTemp = JSONObject.fromObject(jsonArray191);
                    rowTemp = new LinkedHashMap<String, String>();
                    rowTemp.put("1", UtileSmart.TryGetJsonString(jsonTemp, "description"));
                    rowTemp.put("2", UtileSmart.TryGetJsonString(jsonTemp, "location"));
                    rowTemp.put("3", UtileSmart.TryGetJsonString(jsonTemp, "lng"));
                    rowTemp.put("4", UtileSmart.TryGetJsonString(jsonTemp, "lat"));
                    rowTemp.put("5", "3");
                    rowTemp.put("6", UtileSmart.TryGetJsonString(jsonTemp, "id"));
                    rowTemp.put("7", UtileSmart.TryGetJsonString(jsonTemp, "type"));
                    exportData.add(rowTemp);
                }
                CSVUtils.createCSVFile(exportData, map, TaskBicycleData.getZsdDataVPath(), "houseCSV");
            }
        } catch (HttpException e) {
            System.out.println("AutoTaskHouseData httpExcepiton" + e.getLocalizedMessage());
            //RSLogger.ErrorLogInfo("AutoTaskHouseData httpExcepiton " + e.getLocalizedMessage(), e);
        } catch (IOException e) {
            System.out.println("AutoTaskHouseData IOException " + e.getLocalizedMessage());
//            RSLogger.ErrorLogInfo("AutoTaskHouseData IOException " + e.getLocalizedMessage(), e);
        } catch (Exception e) {
            System.out.println("AutoTaskHouseData Exception " + e.getLocalizedMessage());
//            RSLogger.ErrorLogInfo("AutoTaskHouseData Exception " + e.getLocalizedMessage(), e);
        }
    }
}
