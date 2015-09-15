/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg;

import com.smart.common.DBHelper;
import com.smart.common.DeployInfo;
import com.smart.common.RSLogger;
import com.smart.common.RSThreadPool;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 *
 * @author Administrator
 */
public class StartOption implements ServletContextListener {

    private boolean isLoad = false;

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("init");
        if (isLoad) {
            return;
        }

//        ServletContext sc = sce.getServletContext();//由事件得到servletcontext
//        String name = sc.getInitParameter("RootPath");//通过参数获取ServletContext的value
        try {
            if (!DeployInfo.readSetUp()) {
                throw new Exception("load deployInfo failed,check log. " + DeployInfo.DeployRootPath + ".");
            }
        } catch (Exception e) {
            RSLogger.SetUpLogInfo(String.format("start service error step readSetUp ,%s", e.getLocalizedMessage()));
            RSLogger.ErrorLogInfo(String.format("start service error step readSetUp ,%s", e.getLocalizedMessage()), e);
        }

        try {
            RSLogger.Initial();
        } catch (Exception e) {
            RSLogger.SetUpLogInfo(String.format("start service error step RSLogger.Initial ,%s", e.getLocalizedMessage()));
            RSLogger.ErrorLogInfo(String.format("start service error step RSLogger.Initial ,%s", e.getLocalizedMessage()), e);
        }
        try {
            if (!DBHelper.initializePool()) {
                throw new Exception("db initializePool error .");
            }
        } catch (Exception e) {
            RSLogger.SetUpLogInfo(String.format("start service error step initializePool,%s", e.getLocalizedMessage()));
            RSLogger.ErrorLogInfo(String.format("start service error step initializePool,%s", e.getLocalizedMessage()), e);
        }
        try {
            TaskBicycleData.TimingBrushBicycleData();
        } catch (Exception e) {
            RSLogger.SetUpLogInfo(String.format("TaskBicycleData.TimingBrushBicycleData ,%s", e.getLocalizedMessage()));
            RSLogger.ErrorLogInfo(String.format("TaskBicycleData.TimingBrushBicycleData ,%s", e.getLocalizedMessage()), e);
        }
        isLoad = true;
//        try {
//            AssignTrial.initialWebSocketService();
//        } catch (Exception e) {
//            RSLogger.SetUpLogInfo(String.format("start service error step initialWebSocketService,%s", e.getLocalizedMessage()));
//            RSLogger.ErrorLogInfo(String.format("start service error step initialWebSocketService,%s", e.getLocalizedMessage()), e);
//        }

    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
