/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg;

import com.smart.common.DBHelper;
import com.smart.common.DeployInfo;
import com.smart.common.FormationResult;
import com.smart.common.UtileSmart;
import com.smart.common.base.commonAnalyzeParam;
import com.smart.common.model.ExecuteResultParam;
import com.smart.common.model.ResponseResultCode;
import com.smart.smartexchangeg.calc.CalcLocation;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.camel.Exchange;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.FileReader;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

/**
 * REST Web Service
 *
 * @author Administrator
 */
@Path("zst")
public class ZstResource {

    @Context
    private UriInfo context;

    AnalyzeParam smartPayAnalyzeParam = new AnalyzeParam();
    FormationResult formationResult = new FormationResult();

    /**
     * Creates a new instance of ZstResource
     */
    public ZstResource() {
    }

    @POST
    @Path("getHouseInfo")
    public String getHouseInfo(String param) {
        try {
            HttpClient httpClient = new HttpClient();
            PostMethod postMethod = new PostMethod("http://218.204.174.24:8052/ZST/house/getNewHouseData?beginDate=1997-01-01&endDate=2020-01-01");

            try {
                httpClient.executeMethod(postMethod);
            } catch (HttpException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            String resp = null;
            if (postMethod.getStatusCode() == HttpStatus.SC_OK) {
                resp = postMethod.getResponseBodyAsString();
                //解析数据
                JSONObject jsonObj = JSONObject.fromObject(resp);
                JSONArray array = jsonObj.getJSONArray("data");

                JSONObject resultObject = CalcLocation.LocationDataAccess1(array, "lat", "lng");

                JSONObject obj = new JSONObject();
                obj.accumulate(DeployInfo.ResultDataTag, resultObject);
                String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
                return resultStr;

            } else {
                String resultStr = new FormationResult().formationResult(ResponseResultCode.Error, "", new ExecuteResultParam("未知错误原因", "未知错误原因"));
//            exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
//            exchange.getOut().setBody(resultStr);
                return resultStr;
            }

//            ScriptEngineManager manager = new ScriptEngineManager();
//            ScriptEngine engine = manager.getEngineByName("javascript");
//
//            String jsFileName = DeployInfo.GetDelplyRootPath() + File.separator + "mapLevelDataComputer.js";   // 读取js文件   
//
//            FileReader reader = new FileReader(jsFileName);   // 执行指定脚本   
//            engine.eval(reader);
//
//            if (engine instanceof Invocable) {
//                Invocable invoke = (Invocable) engine;    // 调用merge方法，并传入两个参数    
//
//// c = merge(2, 3);    
//                Object c = invoke.invokeFunction("mapLevelDataComputer");
//
//                System.out.println("c = " + c);
//            }
//
//            reader.close();
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }

    @POST
    @Path("ibikestation")
    public String ibikestation(String param) {
        try {
            JSONArray array = new JSONArray();
            for (Object bucycleKey : TaskBicycleData.bicycleMap) {
                array.add(bucycleKey);
            }
            JSONObject obj = new JSONObject();
            obj.accumulate(DeployInfo.ResultDataTag, array);
            return formationResult.formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }

    @POST
    @Path("nearByListIbik")
    public String nearByListIbik(String param) {
        //解析参数，根据参数返回
        String paramKey_lat = "lat";
        String paramKey_lng = "lng";
        String paramKey_ride = "ride";

        Map<String, Object> paramMap = null;
        try {
            paramMap = new HashMap<String, Object>();

            paramMap.put(paramKey_lat, null);
            paramMap.put(paramKey_lng, null);
            paramMap.put(paramKey_ride, null);

            new AnalyzeParam().AnalyzeParamBodyToMap(param, paramMap);

            double doubleTempLat = 0, doubleTempLng = 0, paramLat = 0, paramLatPlus = 0, paramLng = 0, paramLngPlus = 0, paramRide = 0;
            paramLat = Double.parseDouble(UtileSmart.getStringFromMap(paramMap, paramKey_lat));
            paramLng = Double.parseDouble(UtileSmart.getStringFromMap(paramMap, paramKey_lng));
            paramRide = Double.parseDouble(UtileSmart.getStringFromMap(paramMap, paramKey_ride));

            if (paramLat == 0 || paramLng == 0 || paramRide == 0) {
                return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam("参数错误", "参数错误"));
            }
            paramLatPlus = paramLat + (paramRide * TaskBicycleData.LAT_CARDINAL);
            paramLngPlus = paramLng + (paramRide * TaskBicycleData.LAT_CARDINAL);
            paramLat -= (paramRide * TaskBicycleData.LAT_CARDINAL);
            paramLng -= (paramRide * TaskBicycleData.LAT_CARDINAL);

            Set<String> nearSet = new HashSet<>();
            JSONArray array = new JSONArray();

            for (Object valueTemp : TaskBicycleData.bicycleMap) {
                JSONObject value = JSONObject.fromObject(valueTemp);
                doubleTempLat = Double.parseDouble(value.getString("lat"));
                doubleTempLng = Double.parseDouble(value.getString("lng"));

                // x表示当地的纬度lat,y表示当地的经度lng
                if (paramLng < doubleTempLng && doubleTempLng < paramLngPlus && paramLat < doubleTempLat && doubleTempLat < paramLatPlus) {
                    nearSet.add(value.getString("id"));
//                array.add(value.getString("id"));
                }
            }

            JSONObject obj = new JSONObject();
            obj.accumulate(DeployInfo.ResultDataTag, JSONArray.fromObject(nearSet));
            return formationResult.formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, "", new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }

    }

    @POST
    @Path("lendRecordIbik1")
    public String lendRecordIbik1(String param) {
        String paramKey_TBVipNo = "TBVipNo";
        String paramKey_TBCertNo = "TBCertNo";
        String paramKey_TBStartNo = "TBStartNo";
        String paramKey_TBRowCount = "TBRowCount";
        String paramKey_tb_startTime = "tb_startTime";
        String paramKey_tb_endTime = "tb_endTime";
//
        Map<String, Object> paramMap = null;
        try {
            paramMap = new HashMap<String, Object>();

            paramMap.put(paramKey_TBVipNo, null);
            paramMap.put(paramKey_TBCertNo, null);
            paramMap.put(paramKey_TBStartNo, null);
            paramMap.put(paramKey_TBRowCount, null);
            paramMap.put(paramKey_tb_startTime, null);
            paramMap.put(paramKey_tb_endTime, null);

            new AnalyzeParam().AnalyzeParamBodyToMap(param, paramMap);

            HttpClient httpClient = new HttpClient();
            PostMethod postMethod = new PostMethod("http://218.93.33.59:84/zscx/Default.aspx");
            postMethod.addParameter(paramKey_TBVipNo, UtileSmart.getStringFromMap(paramMap, paramKey_TBVipNo));
            postMethod.addParameter(paramKey_TBCertNo, UtileSmart.getStringFromMap(paramMap, paramKey_TBCertNo));
            postMethod.addParameter(paramKey_TBStartNo, "0");
            postMethod.addParameter(paramKey_TBRowCount, "2000");
//        postMethod.addParameter(paramKey_TBStartNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBStartNo));
//        postMethod.addParameter(paramKey_TBRowCount, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBRowCount));
            postMethod.addParameter(paramKey_tb_startTime, UtileSmart.getStringFromMap(paramMap, paramKey_tb_startTime));
            postMethod.addParameter(paramKey_tb_endTime, UtileSmart.getStringFromMap(paramMap, paramKey_tb_endTime));
            postMethod.addParameter("BtnQueryRecord", "查询借车记录");
            postMethod.addParameter("hide_current_page", "0");
            postMethod.addParameter("__VIEWSTATE", "B8OMikzUdmqxiTvxCWRYiw8C6KeFokhVr5Pd4dB0ST+c7s0ETd27qHf0q0ouCJygBgwdfv4H5SDjGN6O6fp7rQzFBcYywy7s3prXeaGGDm60zUYg5LbKJ3o3UqYi6ipeTjaYalaR8GmMdlonBN/TREBhHf6CVVNylpS1YmdmIWr0NQDmfsb1XpevQVqAq55zg5grFFEEPOaHypG12iqMFakQrY5oAAi41R4HHRj40KbURBS5SByPWISdV3sjpH7IUjlmtR6eu0SWFBZ5+shvl8fNCjzoRM/N/brROBP/JVtj/szn5Uqe8Up+jDLRMnUP");
            postMethod.addParameter("__VIEWSTATEGENERATOR", "630104E7");
            postMethod.addParameter("__EVENTVALIDATION", "fubSMYW1ApG6d5EBzs2+jJe9QjmZuMBvACm4VRVHyzrDxo/wXTxQGoq1dmI9SEssibHJQUOZEEfsO+8Rh7qmvEAbegqCnpuiK8QTioqicJsbHl8tX/tsyO/MV9JvZncgb8npyACl2VVJS6Izkker8FfRzLG7+Yx7mE7cNBCQ2T87KglnIkBKJwSUwhJ9yBAM6YmpGx31oMSB+TlZP9/SnJWf+Zh4qrOEcpTTP+AIA1L8FhoSqV45fYC3M9IqeztvdrECew+sIZNWjV4Wdi53PVemURnTyeNWaCFQozIAg5/up71Th5CqaDFQClqBuENbyMddlC/1Lm5j7ajltUoLCg==");
            try {
                httpClient.executeMethod(postMethod);
            } catch (HttpException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            String resp = null;
            if (postMethod.getStatusCode() == HttpStatus.SC_OK) {
                resp = postMethod.getResponseBodyAsString();
                //解析数据
                Document doc = Jsoup.parse(resp);
                if (doc.getElementsByTag("script").size() >= 2) {
                    JSONObject obj = new JSONObject();
                    obj.accumulate(DeployInfo.ResultDataTag, new JSONArray());
                    String resultStr = new FormationResult().formationResult(ResponseResultCode.Error, "输入信息有误", new ExecuteResultParam(obj));
                    return resultStr;
//                exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
//                exchange.getOut().setBody(resultStr);
                } else {
                    Elements elements = doc.getElementsByTag("table");
                    Elements elementsTbody = null, elementsTbodyTr = null, elementsTbodyTrTd = null;
                    JSONArray jsonArray = new JSONArray();
                    JSONObject jsonObjectTemp = null;
                    if (elements != null && elements.size() >= 1) {
                        elementsTbody = elements.get(0).getElementsByTag("tbody");
                        if (elementsTbody != null && elementsTbody.size() == 1) {
                            elementsTbodyTr = elementsTbody.get(0).getElementsByTag("tr");
                            for (Element elementTbodyTr : elementsTbodyTr) {
                                elementsTbodyTrTd = elementTbodyTr.getElementsByTag("td");
                                jsonObjectTemp = new JSONObject();
                                jsonObjectTemp.accumulate("borrowAddress", elementsTbodyTrTd.get(0).text());
                                jsonObjectTemp.accumulate("borrowTime", elementsTbodyTrTd.get(1).text());
                                jsonObjectTemp.accumulate("backAddress", elementsTbodyTrTd.get(2).text());
                                jsonObjectTemp.accumulate("backTime", elementsTbodyTrTd.get(3).text());
                                jsonArray.add(jsonObjectTemp);
                            }
                        }
                    }
                    JSONObject obj = new JSONObject();
                    obj.accumulate(DeployInfo.ResultDataTag, jsonArray);
                    String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
                    return resultStr;
//                exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
//                exchange.getOut().setBody(resultStr);
                }
            } else {
                String resultStr = new FormationResult().formationResult(ResponseResultCode.Error, "", new ExecuteResultParam("未知错误原因", "未知错误原因"));
//            exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
//            exchange.getOut().setBody(resultStr);
                return resultStr;
            }
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, "", new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }

    @POST
    @Path("overageRecord1")
    public String overageRecord1(String param) {
        try {
            String paramKey_TBVipNo = "TBVipNo";
            String paramKey_TBCertNo = "TBCertNo";
            String paramKey_TBStartNo = "TBStartNo";
            String paramKey_TBRowCount = "TBRowCount";
            String paramKey_tb_startTime = "tb_startTime";
            String paramKey_tb_endTime = "tb_endTime";
//
            Map<String, Object> paramMap = null;

            paramMap = new HashMap<String, Object>();

            paramMap.put(paramKey_TBVipNo, null);
            paramMap.put(paramKey_TBCertNo, null);
//        paramMap.put(paramKey_TBStartNo, null);
//        paramMap.put(paramKey_TBRowCount, null);
//        paramMap.put(paramKey_tb_startTime, null);
//        paramMap.put(paramKey_tb_endTime, null);

            new AnalyzeParam().AnalyzeParamBodyToMap(param, paramMap);

            HttpClient httpClient = new HttpClient();
            PostMethod postMethod = new PostMethod("http://218.93.33.59:84/zscx/Default.aspx");
            postMethod.addParameter(paramKey_TBVipNo, UtileSmart.getStringFromMap(paramMap, paramKey_TBVipNo));
            postMethod.addParameter(paramKey_TBCertNo, UtileSmart.getStringFromMap(paramMap, paramKey_TBCertNo));
            postMethod.addParameter(paramKey_TBStartNo, "0");
            postMethod.addParameter(paramKey_TBRowCount, "2000");
//        postMethod.addParameter(paramKey_TBStartNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBStartNo));
//        postMethod.addParameter(paramKey_TBRowCount, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBRowCount));
            postMethod.addParameter(paramKey_tb_startTime, "");
            postMethod.addParameter(paramKey_tb_endTime, "");
            postMethod.addParameter("Button1", "余额查询");
            postMethod.addParameter("hide_current_page", "0");
            postMethod.addParameter("__VIEWSTATE", "B8OMikzUdmqxiTvxCWRYiw8C6KeFokhVr5Pd4dB0ST+c7s0ETd27qHf0q0ouCJygBgwdfv4H5SDjGN6O6fp7rQzFBcYywy7s3prXeaGGDm60zUYg5LbKJ3o3UqYi6ipeTjaYalaR8GmMdlonBN/TREBhHf6CVVNylpS1YmdmIWr0NQDmfsb1XpevQVqAq55zg5grFFEEPOaHypG12iqMFakQrY5oAAi41R4HHRj40KbURBS5SByPWISdV3sjpH7IUjlmtR6eu0SWFBZ5+shvl8fNCjzoRM/N/brROBP/JVtj/szn5Uqe8Up+jDLRMnUP");
            postMethod.addParameter("__VIEWSTATEGENERATOR", "630104E7");
            postMethod.addParameter("__EVENTVALIDATION", "fubSMYW1ApG6d5EBzs2+jJe9QjmZuMBvACm4VRVHyzrDxo/wXTxQGoq1dmI9SEssibHJQUOZEEfsO+8Rh7qmvEAbegqCnpuiK8QTioqicJsbHl8tX/tsyO/MV9JvZncgb8npyACl2VVJS6Izkker8FfRzLG7+Yx7mE7cNBCQ2T87KglnIkBKJwSUwhJ9yBAM6YmpGx31oMSB+TlZP9/SnJWf+Zh4qrOEcpTTP+AIA1L8FhoSqV45fYC3M9IqeztvdrECew+sIZNWjV4Wdi53PVemURnTyeNWaCFQozIAg5/up71Th5CqaDFQClqBuENbyMddlC/1Lm5j7ajltUoLCg==");
            try {
                httpClient.executeMethod(postMethod);
            } catch (HttpException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            String resp = null;
            if (postMethod.getStatusCode() == HttpStatus.SC_OK) {
                resp = postMethod.getResponseBodyAsString();
                //解析数据
                Document doc = Jsoup.parse(resp);
                if (doc.getElementsByTag("script").size() >= 2) {
                    JSONObject obj = new JSONObject();
                    obj.accumulate(DeployInfo.ResultDataTag, new JSONArray());
                    String resultStr = new FormationResult().formationResult(ResponseResultCode.Error, "输入信息有误", new ExecuteResultParam(obj));
                    return resultStr;
//                    exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
//                    exchange.getOut().setBody(resultStr);
                } else {
                    Elements elements = doc.getElementsByTag("table");
                    Elements elementsTbody = null, elementsTbodyTr = null, elementsTbodyTrTd = null;
                    JSONArray jsonArray = new JSONArray();
                    JSONObject jsonObjectTemp = null;
                    if (elements != null && elements.size() >= 1) {
                        elementsTbody = elements.get(0).getElementsByTag("tbody");
                        if (elementsTbody != null && elementsTbody.size() == 1) {
                            elementsTbodyTr = elementsTbody.get(0).getElementsByTag("tr");
                            for (Element elementTbodyTr : elementsTbodyTr) {
                                elementsTbodyTrTd = elementTbodyTr.getElementsByTag("td");
                                jsonObjectTemp = new JSONObject();
                                jsonObjectTemp.accumulate("name", elementsTbodyTrTd.get(0).text());
                                jsonObjectTemp.accumulate("cardNo", elementsTbodyTrTd.get(1).text());
                                jsonObjectTemp.accumulate("overage", elementsTbodyTrTd.get(2).text());
                                jsonArray.add(jsonObjectTemp);
                            }
                        }
                    }
                    JSONObject obj = new JSONObject();
                    obj.accumulate(DeployInfo.ResultDataTag, jsonArray);
                    String resultStr = new FormationResult().formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
//                    exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
//                    exchange.getOut().setBody(resultStr);
                    return resultStr;
                }
            } else {
                String resultStr = new FormationResult().formationResult(ResponseResultCode.Error, "", new ExecuteResultParam("未知错误原因", "未知错误原因"));
                return resultStr;
            }
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }

}
