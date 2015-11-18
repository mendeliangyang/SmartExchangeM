/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.controller;

import com.smart.smartexchanges.calc.AnalyzeParam;
import com.smart.smartexchanges.task.TaskBicycleData;
import com.smart.smartexchanges.task.UtileSmart;
import com.smart.smartexchanges.util.ExecuteResultParam;
import com.smart.smartexchanges.util.FormationResult;
import com.smart.smartexchanges.util.ResponseResultCode;
import java.util.HashMap;
import java.util.Map;
import net.sf.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Administrator
 */
@RestController
@RequestMapping("/version")
public class VersionController {

    FormationResult formationResult = new FormationResult();

    @RequestMapping(value = "/GetAppVersion", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String GetAppVersion() throws Exception {
        try {

            JSONObject obj = new JSONObject();//resultDatas
            obj.accumulate("resultDatas", TaskBicycleData.versionInfo);
            return formationResult.formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam(e.getLocalizedMessage(), "", e));
        }
    }

    @RequestMapping(value = "/SetAppVersion", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String setAppVersion(@RequestBody String param) {
        String paramKey_zstVersion = "zstVersion";
        String paramKey_updateContent = "updateContent";

        Map<String, Object> paramMap = null;
        try {
            paramMap = new HashMap<String, Object>();

            paramMap.put(paramKey_zstVersion, null);
            paramMap.put(paramKey_updateContent, null);

            new AnalyzeParam().AnalyzeParamBodyToMap(param, paramMap);

            TaskBicycleData.WriteVersionData(UtileSmart.getStringFromMap(paramMap, paramKey_zstVersion), UtileSmart.getStringFromMap(paramMap, paramKey_updateContent));
            return formationResult.formationResult(ResponseResultCode.Success, "", new ExecuteResultParam());
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, "", new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }
}
