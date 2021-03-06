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
import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author Administrator
 */
public class LendRecordIbikSelfProcess implements Processor {

    @Override
    public void process(Exchange exchange) throws Exception {
        String strParam = exchange.getIn().getBody(String.class);
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
        paramMap.put(paramKey_TBStartNo, null);
        paramMap.put(paramKey_TBRowCount, null);
        paramMap.put(paramKey_tb_startTime, null);
        paramMap.put(paramKey_tb_endTime, null);

        new AnalyzeParam().AnalyzeParamBodyToMap(strParam, paramMap);
        exchange.getOut().setHeader(Exchange.HTTP_METHOD, "POST");
        exchange.getOut().setHeader(Exchange.CHARSET_NAME, "utf-8");

        HttpClient httpClient = new HttpClient();
        PostMethod postMethod = new PostMethod("http://218.93.33.59:84/zscx/Default.aspx");
        postMethod.addParameter(paramKey_TBVipNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBVipNo));
        postMethod.addParameter(paramKey_TBCertNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBCertNo));
        postMethod.addParameter(paramKey_TBStartNo, "0");
        postMethod.addParameter(paramKey_TBRowCount, "2000");
//        postMethod.addParameter(paramKey_TBStartNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBStartNo));
//        postMethod.addParameter(paramKey_TBRowCount, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBRowCount));
        postMethod.addParameter(paramKey_tb_startTime, common.UtileSmart.getStringFromMap(paramMap, paramKey_tb_startTime));
        postMethod.addParameter(paramKey_tb_endTime, common.UtileSmart.getStringFromMap(paramMap, paramKey_tb_endTime));
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
                exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
                exchange.getOut().setBody(resultStr);
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
                exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
                exchange.getOut().setBody(resultStr);
            }
        } else {
            String resultStr = new FormationResult().formationResult(ResponseResultCode.Error, "", new ExecuteResultParam("未知错误原因", "未知错误原因"));
            exchange.getOut().setHeader("Content-Type", "application/json;chatset='utf-8'");
            exchange.getOut().setBody(resultStr);
        }

    }

    public static void sendReq(String url, String email, String fname) throws IOException {

        HttpClient httpClient = new HttpClient();
        PostMethod postMethod = new PostMethod(url);
        postMethod.addParameter("Email", email);
        postMethod.addParameter("fname", fname);
        try {
            httpClient.executeMethod(postMethod);
        } catch (HttpException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (postMethod.getStatusCode() == HttpStatus.SC_OK) {
            String resp = postMethod.getResponseBodyAsString();
        } else {
            //...postMethod.getStatusLine();
        }
    }

    public static byte[] readInputStream(InputStream inStream) throws Exception {
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = 0;
        while ((len = inStream.read(buffer)) != -1) {
            outStream.write(buffer, 0, len);
        }
        byte[] data = outStream.toByteArray();
        outStream.close();
        inStream.close();
        return data;
    }
}
