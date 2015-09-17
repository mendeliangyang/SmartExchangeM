/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg;

import com.smart.common.RSLogger;
import com.smart.common.UtileSmart;
import com.smart.common.model.SmartDecodingEnum;
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
public class AutoTaskHouseData implements Runnable {

    @Override
    public void run() {
        HttpClient httpClient = new HttpClient();
        PostMethod postMethod = new PostMethod("http://218.204.174.24:8052/ZST/house/getNewHouseData?beginDate=1997-01-01&endDate=2020-01-01");
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
            }
        } catch (HttpException e) {
            System.out.println("AutoTaskHouseData httpExcepiton" + e.getLocalizedMessage());
            RSLogger.ErrorLogInfo("AutoTaskHouseData httpExcepiton " + e.getLocalizedMessage(), e);
        } catch (IOException e) {
            System.out.println("AutoTaskHouseData IOException " + e.getLocalizedMessage());
            RSLogger.ErrorLogInfo("AutoTaskHouseData IOException " + e.getLocalizedMessage(), e);
        } catch (Exception e) {
            System.out.println("AutoTaskHouseData Exception " + e.getLocalizedMessage());
            RSLogger.ErrorLogInfo("AutoTaskHouseData Exception " + e.getLocalizedMessage(), e);
        }

    }

}
