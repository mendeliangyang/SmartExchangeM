/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.zst;

import java.util.HashMap;
import java.util.Map;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;

/**
 *
 * @author Administrator
 */
public class LendRecordIbikRequestProcess implements Processor {

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

//        exchange.getOut().setHeader("", "application/json;chatset='utf-8'");
//        HttpRequest request = exchange.getIn(NettyHttpMessage.class).getHttpRequest();
//        request.setMethod(HttpMethod.POST);
//        //     HttpResponseEncoder hre=   new HttpResponseEncoder();
//        HttpPostRequestDecoder decode = new HttpPostRequestDecoder(request);
//        decode.getBodyHttpDatas();
//        InterfaceHttpData data = decode.next();

        StringBuffer sbParam = new StringBuffer();
        sbParam.append(paramKey_TBVipNo).append("=").append(common.UtileSmart.getStringFromMap(paramMap, paramKey_TBVipNo)).append("&")
                .append(paramKey_TBCertNo).append("=").append(common.UtileSmart.getStringFromMap(paramMap, paramKey_TBCertNo)).append("&")
                .append(paramKey_TBStartNo).append("=").append(common.UtileSmart.getStringFromMap(paramMap, paramKey_TBStartNo)).append("&")
                .append(paramKey_TBRowCount).append("=").append(common.UtileSmart.getStringFromMap(paramMap, paramKey_TBRowCount)).append("&")
                .append(paramKey_tb_startTime).append("=").append(common.UtileSmart.getStringFromMap(paramMap, paramKey_tb_startTime)).append("&")
                .append(paramKey_tb_endTime).append("=").append(common.UtileSmart.getStringFromMap(paramMap, paramKey_tb_endTime)).append("&")
                .append("BtnQueryRecord").append("=").append("查询借车记录").append("&")
                .append("hide_current_page").append("=").append("0").append("&")
                .append("__VIEWSTATE").append("=").append("B8OMikzUdmqxiTvxCWRYiw8C6KeFokhVr5Pd4dB0ST+c7s0ETd27qHf0q0ouCJygBgwdfv4H5SDjGN6O6fp7rQzFBcYywy7s3prXeaGGDm60zUYg5LbKJ3o3UqYi6ipeTjaYalaR8GmMdlonBN/TREBhHf6CVVNylpS1YmdmIWr0NQDmfsb1XpevQVqAq55zg5grFFEEPOaHypG12iqMFakQrY5oAAi41R4HHRj40KbURBS5SByPWISdV3sjpH7IUjlmtR6eu0SWFBZ5+shvl8fNCjzoRM/N/brROBP/JVtj/szn5Uqe8Up+jDLRMnUP").append("&")
                .append("__VIEWSTATEGENERATOR").append("=").append("630104E7").append("&")
                .append("__EVENTVALIDATION").append("=").append("fubSMYW1ApG6d5EBzs2+jJe9QjmZuMBvACm4VRVHyzrDxo/wXTxQGoq1dmI9SEssibHJQUOZEEfsO+8Rh7qmvEAbegqCnpuiK8QTioqicJsbHl8tX/tsyO/MV9JvZncgb8npyACl2VVJS6Izkker8FfRzLG7+Yx7mE7cNBCQ2T87KglnIkBKJwSUwhJ9yBAM6YmpGx31oMSB+TlZP9/SnJWf+Zh4qrOEcpTTP+AIA1L8FhoSqV45fYC3M9IqeztvdrECew+sIZNWjV4Wdi53PVemURnTyeNWaCFQozIAg5/up71Th5CqaDFQClqBuENbyMddlC/1Lm5j7ajltUoLCg==");
//      decoder = new HttpPostRequestDecoder(factory, request);
//        HttpServletRequest req = new HttpServletRequestWrapper(request);
//        org.apache.catalina.connector.Request

        //HttpServletRequest req = exchange.getIn(HttpMessage.class).getRequest();
//        String name = req.setAttribute(paramKey_TBVipNo,""); 
//        req.setAttribute(paramKey_TBVipNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBVipNo));
//        req.setAttribute(paramKey_TBCertNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBCertNo));
//        req.setAttribute(paramKey_TBStartNo, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBStartNo));
//        req.setAttribute(paramKey_TBRowCount, common.UtileSmart.getStringFromMap(paramMap, paramKey_TBRowCount));
//        req.setAttribute(paramKey_tb_startTime, common.UtileSmart.getStringFromMap(paramMap, paramKey_tb_startTime));
//        req.setAttribute(paramKey_tb_endTime, common.UtileSmart.getStringFromMap(paramMap, paramKey_tb_endTime));
//        req.setAttribute(paramKey_TBVipNo, "15362737311");
//        req.setAttribute(paramKey_TBCertNo, "510311197712280520");
//        req.setAttribute(paramKey_TBStartNo, "0");
//        req.setAttribute(paramKey_TBRowCount, "20");
//        req.setAttribute(paramKey_tb_startTime, "2015-1-1");
//        req.setAttribute(paramKey_tb_endTime, "2015-8-22");
//        req.setAttribute("__VIEWSTATE", "B8OMikzUdmqxiTvxCWRYiw8C6KeFokhVr5Pd4dB0ST+c7s0ETd27qHf0q0ouCJygBgwdfv4H5SDjGN6O6fp7rQzFBcYywy7s3prXeaGGDm60zUYg5LbKJ3o3UqYi6ipeTjaYalaR8GmMdlonBN/TREBhHf6CVVNylpS1YmdmIWr0NQDmfsb1XpevQVqAq55zg5grFFEEPOaHypG12iqMFakQrY5oAAi41R4HHRj40KbURBS5SByPWISdV3sjpH7IUjlmtR6eu0SWFBZ5+shvl8fNCjzoRM/N/brROBP/JVtj/szn5Uqe8Up+jDLRMnUP");
//        req.setAttribute("__VIEWSTATEGENERATOR", "630104E7");
//        req.setAttribute("__EVENTVALIDATION", "fubSMYW1ApG6d5EBzs2+jJe9QjmZuMBvACm4VRVHyzrDxo/wXTxQGoq1dmI9SEssibHJQUOZEEfsO+8Rh7qmvEAbegqCnpuiK8QTioqicJsbHl8tX/tsyO/MV9JvZncgb8npyACl2VVJS6Izkker8FfRzLG7+Yx7mE7cNBCQ2T87KglnIkBKJwSUwhJ9yBAM6YmpGx31oMSB+TlZP9/SnJWf+Zh4qrOEcpTTP+AIA1L8FhoSqV45fYC3M9IqeztvdrECew+sIZNWjV4Wdi53PVemURnTyeNWaCFQozIAg5/up71Th5CqaDFQClqBuENbyMddlC/1Lm5j7ajltUoLCg==");
        exchange.getOut().setBody(sbParam.toString());

    }

}
