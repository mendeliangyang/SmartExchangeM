/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.calc;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.beanutils.BeanUtils;

/**
 *
 * @author Administrator
 */
public class CSVUtils {

    /**
     *
     * @param exportData 导入的数据
     * @param rowMapper 列名
     * @param outPutPath 输出路径
     * @param filename 输出文件名
     * @return
     */
    public static File createCSVFile(List exportData, LinkedHashMap rowMapper,
            String outPutPath, String filename) {

        File csvFile = null;
        BufferedWriter csvFileOutputStream = null;
        try {
            csvFile = new File(outPutPath + filename + ".csv");
            // csvFile.getParentFile().mkdir();
            File parent = csvFile.getParentFile();
            if (parent != null && !parent.exists()) {
                parent.mkdirs();
            }
            csvFile.createNewFile();

            // GB2312使正确读取分隔符","
            csvFileOutputStream = new BufferedWriter(new OutputStreamWriter(
                    new FileOutputStream(csvFile), "GB2312"), 1024);
            // 写入文件头部
            for (Iterator propertyIterator = rowMapper.entrySet().iterator(); propertyIterator
                    .hasNext();) {
                java.util.Map.Entry propertyEntry = (java.util.Map.Entry) propertyIterator
                        .next();
                csvFileOutputStream.write("\""
                        + propertyEntry.getValue().toString() + "\"");
                if (propertyIterator.hasNext()) {
                    csvFileOutputStream.write(",");
                }
            }
            csvFileOutputStream.newLine();

            // 写入文件内容
            for (Iterator iterator = exportData.iterator(); iterator.hasNext();) {
                LinkedHashMap row = (LinkedHashMap) iterator.next();
                System.out.println(row);

                for (Iterator propertyIterator = row.entrySet().iterator(); propertyIterator.hasNext();) {
                    java.util.Map.Entry propertyEntry = (java.util.Map.Entry) propertyIterator.next();
// System.out.println(BeanUtils.getProperty(row, propertyEntry.getKey().toString()));
                    csvFileOutputStream.write("\"" + propertyEntry.getValue().toString() + "\"");
                    if (propertyIterator.hasNext()) {
                        csvFileOutputStream.write(",");
                    }
                }

//                for (Iterator propertyIterator = row.entrySet().iterator(); propertyIterator.hasNext();) {
//                    java.util.Map.Entry propertyEntry = (java.util.Map.Entry) propertyIterator.next();
//                    System.out.println(BeanUtils.getProperty(row, propertyEntry.getKey().toString()));
//                    csvFileOutputStream.write("\""
//                            + BeanUtils.getProperty(row, propertyEntry.getKey().toString()) + "\"");
//                    if (propertyIterator.hasNext()) {
//                        csvFileOutputStream.write(",");
//                    }
//                }
                if (iterator.hasNext()) {
                    csvFileOutputStream.newLine();
                }
            }
            csvFileOutputStream.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                csvFileOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return csvFile;
    }
}
