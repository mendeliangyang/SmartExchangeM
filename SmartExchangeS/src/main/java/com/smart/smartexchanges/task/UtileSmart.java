/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchanges.task;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;
import java.util.UUID;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class UtileSmart {

    public static void FreeObjects(Object... objects) {
        if (objects != null) {
            for (Object obj : objects) {
                obj = null;
            }
        }
    }

    public static String string2MD5(String inStr) {
        MessageDigest md5 = null;
        try {
            md5 = MessageDigest.getInstance("MD5");
        } catch (Exception e) {
            return "";
        }
        char[] charArray = inStr.toCharArray();
        byte[] byteArray = new byte[charArray.length];

        for (int i = 0; i < charArray.length; i++) {
            byteArray[i] = (byte) charArray[i];
        }
        byte[] md5Bytes = md5.digest(byteArray);
        StringBuffer hexValue = new StringBuffer();
        for (int i = 0; i < md5Bytes.length; i++) {
            int val = ((int) md5Bytes[i]) & 0xff;
            if (val < 16) {
                hexValue.append("0");
            }
            hexValue.append(Integer.toHexString(val));
        }
        return hexValue.toString();

    }

    public static String readFile(String path, SmartDecodingEnum encoding) throws Exception {
        StringBuffer sb = new StringBuffer();
        String tempString = null;
        File file = null;
        BufferedReader reader = null;
        try {

            reader = new BufferedReader(new InputStreamReader(new FileInputStream(new File(path)), encoding.toString()));
            while ((tempString = reader.readLine()) != null) {
                sb.append(tempString);
            }
            reader.close();
            return sb.toString();
        } catch (IOException e) {
            throw new Exception("read file error." + e.getLocalizedMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException el) {
                } finally {
                    UtileSmart.FreeObjects(sb, tempString, file, reader);
                }
            }
        }
    }

    public static void writeFile(String path, String strContext, SmartDecodingEnum decoding) throws Exception {
        FileOutputStream out = null;
        try {
            out = new FileOutputStream(new File(path));
            out.write(strContext.getBytes(decoding.toString()));
            out.close();
        } catch (FileNotFoundException ex) {
            throw new Exception("write file error file not found." + ex.getLocalizedMessage());
        } catch (IOException ex) {
            throw new Exception("write file error." + ex.getLocalizedMessage());
        }

    }

    public static Object getObjectFromMap(Map<String, Object> map, String key, boolean throwError) throws Exception {
        if (map == null || key == null) {
            throw new Exception("error on getObjectFromMap , paramateter is null.");
        }
        if (!map.containsKey(key)) {
            if (throwError) {
                throw new Exception("error on getObjectFromMap , map no containsKey :" + key);
            }
            return null;
        }
        Object value = map.get(key);
        if (value == null && throwError) {
            throw new Exception(String.format("error on getObjectFromMap, The inside of the map %s value is empty ", key));
        }
        return value;
    }

    public static String getStringFromMap(Map<String, Object> map, String key) throws Exception {
        return getObjectFromMap(map, key, true).toString();
    }

    public static int getIntFromMap(Map<String, Object> map, String key) throws Exception {
        return Integer.parseInt(getObjectFromMap(map, key, true).toString());
    }

    public static int tryGetIntFromMap(Map<String, Object> map, String key) throws Exception {
        try {
            Object temp = getObjectFromMap(map, key, false);
            if (temp == null) {
                return 0;
            }
            return Integer.parseInt(temp.toString());
        } catch (NumberFormatException e) {
            return 0;
        }
    }
//    public static Object[] getListFromMap(Map<String, Object> map, String key) throws Exception {
//        return (Object[]) getObjectFromMap(map, key, true);
//    }

    public static String tryGetStringFromMap(Map<String, Object> map, String key) throws Exception {
        Object temp = getObjectFromMap(map, key, false);
        if (temp == null) {
            return null;
        }
        return temp.toString();
    }

//    public static Object[] tryGetListFromMap(Map<String, Object> map, String key) throws Exception {
//        return (Object[]) getObjectFromMap(map, key, false);
//    }
    public static JSONArray tryGetJSONArrayFromMap(Map<String, Object> map, String key) throws Exception {
        return (JSONArray) getObjectFromMap(map, key, false);
    }

    public static JSONObject tryGetJSONObjectFromMap(Map<String, Object> map, String key) throws Exception {
        return (JSONObject) getObjectFromMap(map, key, false);
    }

    public static JSONArray GetJSONArrayFromMap(Map<String, Object> map, String key) throws Exception {
        return (JSONArray) getObjectFromMap(map, key, true);
    }

    public static JSONObject GetJSONObjectFromMap(Map<String, Object> map, String key) throws Exception {
        return (JSONObject) getObjectFromMap(map, key, true);
    }

    public static void cleanMapTDString(Map<String, Map<String, String>> mapOrigin) {
        if (mapOrigin == null) {
            return;
        }
        Iterator iterator = mapOrigin.values().iterator();
        while (iterator.hasNext()) {
            Map<String, String> next = (Map<String, String>) iterator.next();
            iterator.remove();
            if (next != null) {
                next.clear();
            }
        }
        mapOrigin.clear();
    }

    /**
     * *
     * 获取当前系统时间字符串 yyyyMMddHH
     *
     * @return
     */
    public static String getCurrentDate() {
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHH");//设置日期格式
        return df.format(new Date());
    }

    /**
     * *
     * 获取当前系统时间字符串 yyyyMMdd
     *
     * @param format yyyyMMdd
     * @return
     */
    public static String getCurrentDate(String format) {
        SimpleDateFormat df = new SimpleDateFormat(format);//设置日期格式
        return df.format(new Date());
    }

    public static String getUUID() {
        return UUID.randomUUID().toString();
    }

    /**
     * *
     * 获取当前系统时间字符串 HHmmss getCurrentDateShortTime 改名 getCurrentTime
     *
     * @return
     */
    public static String getCurrentTime() {
        SimpleDateFormat df = new SimpleDateFormat("HHmmss");//设置日期格式
        return df.format(new Date());
    }

    /**
     * *
     * 获取当前系统 秒的时间字符串 ss
     *
     * @return
     */
    public static String getCurrentDateSecond() {
        SimpleDateFormat df = new SimpleDateFormat("ss");//设置日期格式
        return df.format(new Date());
    }

    static Random random = new Random();

    public static String getRandomStrbySeed(int pSeed) {
        return String.format("%d", random.nextInt(pSeed));
    }

    public static short overrideParseShort(String strShort) {
        if (strShort != null && !strShort.isEmpty()) {
            return Short.parseShort(strShort);
        }
        return -1;
    }

    public static int overrideParseInt(String strInt) {
        if (strInt != null && !strInt.isEmpty()) {
            return Integer.parseInt(strInt);
        }
        return -1;
    }

    /**
     *
     * @param jsonObj
     * @param strParam
     * @return
     * @throws Exception
     */
    public static String GetJsonString(JSONObject jsonObj, String strParam) throws Exception {
        return jsonObj.getString(strParam);
//        if (jsonObj.containsKey(strParam)) {
//            return jsonObj.getString(strParam);
//        }
//        if (isException) {
//            throw new Exception("jsonObject There is no " + strParam);
//        }
//        return null;
    }

    /**
     *
     * @param jsonObj
     * @param strParam
     * @return 没有 strParam 属性返回null
     */
    public static String TryGetJsonString(JSONObject jsonObj, String strParam) {
        try {
            return GetJsonString(jsonObj, strParam);
        } catch (Exception ex) {
            System.out.println(ex.getLocalizedMessage());
        }
        return null;
    }
}
