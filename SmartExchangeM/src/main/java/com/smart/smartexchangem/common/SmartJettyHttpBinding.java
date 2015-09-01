/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.common;

import common.FormationResult;
import common.model.ExecuteResultParam;
import common.model.ResponseResultCode;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.apache.camel.component.http.DefaultHttpBinding;
import org.apache.camel.component.http.HttpEndpoint;

/**
 *
 * @author Administrator
 */
public class SmartJettyHttpBinding extends DefaultHttpBinding {

    public SmartJettyHttpBinding() {
        super();
    }

    public SmartJettyHttpBinding(HttpEndpoint he) {
        super(he);
    }

    @Override
    public void doWriteExceptionResponse(Throwable exception, HttpServletResponse response) throws IOException {
        //super.doWriteExceptionResponse(exception, response); //To change body of generated methods, choose Tools | Templates.
        response.setStatus(200);
        String strResponse = new FormationResult().formationResult(ResponseResultCode.Error, new ExecuteResultParam(exception.getLocalizedMessage(), exception.getLocalizedMessage(), new Exception(exception)));
        response.getWriter().write(strResponse);
    }

}
