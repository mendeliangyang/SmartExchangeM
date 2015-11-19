/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.servlet;

import com.smart.smartexchanges.task.TaskBicycleData;
import javax.servlet.http.HttpServlet;

/**
 *
 * @author Administrator
 */
public class StartServlet extends HttpServlet {

    public StartServlet() {
        TaskBicycleData.TimingBrushBicycleData();
    }
}
