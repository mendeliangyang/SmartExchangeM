/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.calc;

import com.smart.smartexchanges.task.UtileSmart;
import java.util.Map;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class commonAnalyzeParam {

    public static String paramtokenKey = "token";
    public static String paramRSIDKey = "RSID";
    private String RSID = null;
    private String token = null;

    public String getRSID() {
        return RSID;
    }

    protected void setRSID(String RSID) {
        this.RSID = RSID;
    }

    public String getToken() {
        return token;
    }

    private void setToken(String token) {
        this.token = token;
    }

    public ParamBaseModel AnalyzeParamBase(String param) throws Exception {
        ParamBaseModel baseModel = null;
        JSONObject jsonObj = null;
        try {
            jsonObj = JSONObject.fromObject(param);
            baseModel = new ParamBaseModel();
            baseModel.jsonHead = jsonObj.getJSONObject("head");
            if (baseModel.jsonHead.containsKey(paramRSIDKey)) {
                this.setRSID(baseModel.jsonHead.getString(paramRSIDKey));
            }
            if (baseModel.jsonHead.containsKey(paramtokenKey)) {
                this.setToken(baseModel.jsonHead.getString(paramtokenKey));
            }
            baseModel.jsonBody = jsonObj.getJSONObject("body");
            if (baseModel.jsonBody.containsKey("note")) {
                baseModel.jsonNote = baseModel.jsonBody.getJSONObject("note");
            }
            if (baseModel.jsonBody.containsKey("values")) {
                baseModel.jsonValues = baseModel.jsonBody.getJSONObject("values");
            }
            return baseModel;
        } catch (Exception e) {
            throw new Exception("transferReviveRSSignModel error." + e.getLocalizedMessage());
        } finally {
            UtileSmart.FreeObjects(jsonObj);
        }
    }

    /**
     *
     * @param param
     * @param content head 头，body 消息内容， 消息内容中的note， values 消息内容中的values
     * @param paramModel
     * @throws Exception
     */
    public void AnalyzeParamToMap(String param, String content, Map<String, Object> paramModel) throws Exception {
        ParamBaseModel baseModel = null;
        JSONObject objSourceTemp = null, objValueTemp = null;
        try {
            baseModel = AnalyzeParamBase(param);
            if (content.equals("head")) {

                objSourceTemp = baseModel.jsonHead;
            } else if (content.equals("body")) {
                objSourceTemp = baseModel.jsonBody;
            } else if (content.equals("note")) {

                objSourceTemp = baseModel.jsonNote;
            } else if (content.equals("values")) {

                objSourceTemp = baseModel.jsonValues;
            } else {

                throw new Exception("AnalyzeParamToMap error ,invalid content." + content);
            }
//            switch (content) {
//                case "head":
//                    objSourceTemp = baseModel.jsonHead;
//                    break;
//                case "body":
//                    objSourceTemp = baseModel.jsonBody;
//                    break;
//                case "note":
//                    objSourceTemp = baseModel.jsonNote;
//                    break;
//                case "values":
//                    objSourceTemp = baseModel.jsonValues;
//                    break;
//                default:
//                    throw new Exception("AnalyzeParamToMap error ,invalid content." + content);
//            }
            if (objSourceTemp == null) {
                throw new Exception("AnalyzeParamToMap error , content is null." + content);
            }
            if (paramModel == null) {
                return;
            }
            
            
            
            for (String key : paramModel.keySet()) {
                if (objSourceTemp.containsKey(key)) {
                    Object objTemp = objSourceTemp.get(key);
                    if (objTemp instanceof String) {
                        
//                        paramModel.remove(key);
                        paramModel.put(key, objTemp);
//                        paramModel.replace(key, objTemp);
                    } else if (objTemp instanceof JSONArray) {
                        //todo jsonarray

//                        paramModel.remove(key);
                        paramModel.put(key, JSONArray.fromObject(objTemp));
//                        paramModel.replace(key, JSONArray.fromObject(objTemp));
                    } else if (objTemp instanceof JSONObject) {
                        //todo 在chat系统中jsonobject转换成string比较容易处理，但是在其他场景中就麻烦了，所以这里需要更改成jsonobject

//                        paramModel.remove(key);
                        paramModel.put(key, objTemp.toString());
//                        paramModel.replace(key, objTemp.toString());
                        //throw new Exception("not supper jsonobject.");
                    } else {
                        throw new Exception("param unknow type.");
                    }
                }
            }
        } catch (Exception e) {
            throw new Exception("AnalyzeParamBase error." + e.getLocalizedMessage());
        } finally {
            UtileSmart.FreeObjects(baseModel);
        }

    }

    public void AnalyzeParamHeadToMap(String param, Map<String, Object> paramModel) throws Exception {
        AnalyzeParamToMap(param, "head", paramModel);
    }

    public void AnalyzeParamBodyToMap(String param, Map<String, Object> paramModel) throws Exception {
        AnalyzeParamToMap(param, "body", paramModel);
    }

    public void AnalyzeParamNoteToMap(String param, Map<String, Object> paramModel) throws Exception {
        AnalyzeParamToMap(param, "note", paramModel);
    }

    public void AnalyzeParamValuesToMap(String param, Map<String, Object> paramModel) throws Exception {
        AnalyzeParamToMap(param, "values", paramModel);
    }

}
