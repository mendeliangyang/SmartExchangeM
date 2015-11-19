/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.controller;

import com.smart.smartexchanges.calc.AnalyzeParam;
import com.smart.smartexchanges.entity.DeployConfigInfo;
import com.smart.smartexchanges.task.TaskBicycleData;
import com.smart.smartexchanges.task.UtileSmart;
import com.smart.smartexchanges.util.ExecuteResultParam;
import com.smart.smartexchanges.util.FormationResult;
import com.smart.smartexchanges.util.ResponseResultCode;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author Administrator
 */
@RestController
@RequestMapping("/proxy")
public class ProxyServiceController {

    @Resource
    DeployConfigInfo deployConfigInfo;

    FormationResult formationResult = new FormationResult();

    @RequestMapping(value = "/lendRecordIbik1", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String lendRecordIbik1(@RequestBody String param) {
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
            PostMethod postMethod = new PostMethod(deployConfigInfo.getProxyService());
//            PostMethod postMethod = new PostMethod("http://218.93.33.59:84/zscx/Default.aspx");
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
                    obj.accumulate("resultDatas", new JSONArray());
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
                    obj.accumulate("resultDatas", jsonArray);
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

    @RequestMapping(value = "/overageRecord1", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String overageRecord1(@RequestBody String param) {
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
//            PostMethod postMethod = new PostMethod("http://218.93.33.59:84/zscx/Default.aspx");
            PostMethod postMethod = new PostMethod(deployConfigInfo.getProxyService());
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
                    obj.accumulate("resultDatas", new JSONArray());
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
                    obj.accumulate("resultDatas", jsonArray);
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
