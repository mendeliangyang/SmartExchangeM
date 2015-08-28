/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangem.common;

import com.smart.smartexchangem.zst.TaskBicycleData;
import common.DeployInfo;
import common.RSThreadPool;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 *
 * @author Administrator
 */
public class StartProcess implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        try {
            if (!DeployInfo.readSetUp()) {
                throw new Exception("load deployInfo failed,check log. " + DeployInfo.DeployRootPath + ".");
            }
        } catch (Exception e) {
            common.RSLogger.SetUpLogInfo(String.format("start service error step readSetUp ,%s", e.getLocalizedMessage()));
            common.RSLogger.ErrorLogInfo(String.format("start service error step readSetUp ,%s", e.getLocalizedMessage()), e);
        }
        try {
            RSThreadPool.initialTheadPool();
        } catch (Exception e) {
            common.RSLogger.SetUpLogInfo(String.format("start service error step initialCachedTheadPool ,%s", e.getLocalizedMessage()));
            common.RSLogger.ErrorLogInfo(String.format("start service error step initialCachedTheadPool ,%s", e.getLocalizedMessage()), e);
        }
        try {
            common.RSLogger.Initial();
        } catch (Exception e) {
            common.RSLogger.SetUpLogInfo(String.format("start service error step RSLogger.Initial ,%s", e.getLocalizedMessage()));
            common.RSLogger.ErrorLogInfo(String.format("start service error step RSLogger.Initial ,%s", e.getLocalizedMessage()), e);
        }
        try {
            TaskBicycleData.TimingBrushBicycleData();
        } catch (Exception e) {
            common.RSLogger.SetUpLogInfo(String.format("start service error step RSLogger.Initial ,%s", e.getLocalizedMessage()));
            common.RSLogger.ErrorLogInfo(String.format("start service error step RSLogger.Initial ,%s", e.getLocalizedMessage()), e);
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }

}
