/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.controller;

import com.smart.smartexchanges.task.TaskBicycleData;
import com.smart.smartexchanges.util.ExecuteResultParam;
import com.smart.smartexchanges.util.FormationResult;
import com.smart.smartexchanges.util.ResponseResultCode;
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

    @RequestMapping(value = "/GetAppVersion", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public String GetAppVersion(@RequestBody String param) throws Exception {
        try {

            JSONObject obj = new JSONObject();
            obj.accumulate("resultDatas", TaskBicycleData.versionInfo);
            return formationResult.formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }
}
