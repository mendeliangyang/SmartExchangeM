/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg;

import com.smart.common.DeployInfo;
import com.smart.common.FormationResult;
import com.smart.common.UtileSmart;
import com.smart.common.model.ExecuteResultParam;
import com.smart.common.model.ResponseResultCode;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * REST Web Service
 *
 * @author Administrator
 */
@Path("version")
public class VersionResource {

    @Context
    private UriInfo context;

    AnalyzeParam smartPayAnalyzeParam = new AnalyzeParam();
    FormationResult formationResult = new FormationResult();

    /**
     * Creates a new instance of VersionResource
     */
    public VersionResource() {
    }

    @POST
    @Path("GetAppVersion")
    public String getAppVersion(String param) {
        try {

            JSONObject obj = new JSONObject();
            obj.accumulate(DeployInfo.ResultDataTag, TaskBicycleData.versionInfo);
            return formationResult.formationResult(ResponseResultCode.Success, "", new ExecuteResultParam(obj));
        } catch (Exception e) {
            return formationResult.formationResult(ResponseResultCode.Error, new ExecuteResultParam(e.getLocalizedMessage(), param, e));
        }
    }

    @POST
    @Path("SetAppVersion")
    public String setAppVersion(String param) {
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
