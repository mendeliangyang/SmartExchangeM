/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.smart.smartexchangeg.calc;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class CalcLocation {

    static String pictureLevelKey = "picturelevelKey";//层级
    static String titleHxKey = "titleHxKey";//像素
    static String titleHyKey = "titleHyKey";//像素
    static String titlexKey = "titlexKey";// 图块
    static String titleyKey = "titleyKey";// 图块
    static String icoTypeKey = "icoTypeKey";//1单数，2复数

    public static Map<String, JSONArray> LocationDataAccess1(JSONArray jsonArrays, String latKey, String lngKey) {
        if (jsonArrays == null) {
            return null;
        }
        Map<String, JSONArray> map = new HashMap<String, JSONArray>();
        for (int level = 10; level <= 19; level++) {
            JSONArray jsonArrayLevel = new JSONArray();
            for (Object jsonArray : jsonArrays) {
                JSONObject jsonObj = JSONObject.fromObject(jsonArray);
                if (jsonObj.containsKey(pictureLevelKey)) {
                    jsonObj.remove(pictureLevelKey);
                }
                jsonObj.accumulate(pictureLevelKey, level);
                //平面坐标
                BigDecimal[] pingMianZuoBiao = CoordinateConversionProxy.baidulatlon2UTM(Double.parseDouble(jsonObj.getString(latKey)), Double.parseDouble(jsonObj.getString(lngKey)));
                //获取像素坐标
                BigDecimal[] xiangSuZuoBiao = cacutalteXiangSuZuoBiao(pingMianZuoBiao[0], pingMianZuoBiao[1], level);
                if (jsonObj.containsKey(titleHxKey)) {
                    jsonObj.remove(titleHxKey);
                }
                jsonObj.accumulate(titleHxKey, xiangSuZuoBiao[0]);
                if (jsonObj.containsKey(titleHyKey)) {
                    jsonObj.remove(titleHyKey);
                }
                jsonObj.accumulate(titleHyKey, xiangSuZuoBiao[0]);
                //获取改像素坐标所在图块的起始坐标
                BigDecimal[] beginZuoBiao = caculateBeginXiangSu(xiangSuZuoBiao[0], xiangSuZuoBiao[1]);
                //计算该起始坐标的16个空格的中心坐标
                LocationGrid[] grids = getGrideByZuoBiao(beginZuoBiao[0], beginZuoBiao[1]);
                //遍历数据该图块的16个格子
                for (LocationGrid locationGrid : grids) {
                    if (!locationGrid.isIntheGrid(beginZuoBiao[0], beginZuoBiao[1])) {//不在格子内
                        continue;
                    }
                    //判断格子是否被使用
                    Integer user = GridIsUsered1(jsonArrayLevel, locationGrid);
                    if (user != null) {//格子已经被使用
                        JSONObject existObj = JSONObject.fromObject(jsonArrayLevel.get(user));
                        //获取占用点的平面坐标
                        BigDecimal[] oldPingMianZuoBiao = CoordinateConversionProxy.baidulatlon2UTM(Double.parseDouble(existObj.getString(latKey)), Double.parseDouble(existObj.getString(lngKey)));
                        //获取占用点的像素坐标// x表示当地的纬度lat,y表示当地的经度lng
                        BigDecimal[] oldPSuZuoBiao = cacutalteXiangSuZuoBiao(oldPingMianZuoBiao[0], oldPingMianZuoBiao[1], level);

                        Double oldJuli = locationGrid.GetDistanceToCenter(oldPSuZuoBiao[0], oldPSuZuoBiao[1]);
                        Double currentJuli = locationGrid.GetDistanceToCenter(xiangSuZuoBiao[0], xiangSuZuoBiao[1]);
                        if (Double.compare(oldJuli, currentJuli) >= 0) {//旧的距离大
                            jsonArrayLevel.remove(user);
                            if (jsonObj.containsKey(titlexKey)) {
                                jsonObj.remove(titlexKey);
                            }
                            if (jsonObj.containsKey(titleyKey)) {
                                jsonObj.remove(titleyKey);
                            }
                            if (jsonObj.containsKey(icoTypeKey)) {
                                jsonObj.remove(icoTypeKey);

                            }
                            jsonObj.accumulate(titlexKey, new BigDecimal(xiangSuZuoBiao[0].divide(new BigDecimal(256)).intValue()));
                            jsonObj.accumulate(titleyKey, new BigDecimal(xiangSuZuoBiao[0].divide(new BigDecimal(256)).intValue()));
                            jsonObj.accumulate(icoTypeKey, 2);
                        } else {
                            //新的距离大
                            jsonArrayLevel.remove(user);
                            if (jsonObj.containsKey(icoTypeKey)) {
                                jsonObj.remove(icoTypeKey);

                            }
                            jsonObj.accumulate(icoTypeKey, 2);
                            jsonArrayLevel.add(jsonObj);
                        }

                    } else {
                        if (jsonObj.containsKey(titlexKey)) {
                            jsonObj.remove(titlexKey);
                        }
                        if (jsonObj.containsKey(titleyKey)) {
                            jsonObj.remove(titleyKey);
                        }
                        if (jsonObj.containsKey(icoTypeKey)) {
                            jsonObj.remove(icoTypeKey);

                        }
                        jsonObj.accumulate(titlexKey, new BigDecimal(xiangSuZuoBiao[0].divide(new BigDecimal(256)).intValue()));
                        jsonObj.accumulate(titleyKey, new BigDecimal(xiangSuZuoBiao[0].divide(new BigDecimal(256)).intValue()));
                        jsonObj.accumulate(icoTypeKey, 1);
                        jsonArrayLevel.add(jsonObj);
                    }
                }
            }
            map.put(level + "", jsonArrayLevel);
        }

        return map;
    }

    private static BigDecimal[] cacutalteXiangSuZuoBiao(BigDecimal lat, BigDecimal lng, int level) {

        BigDecimal latXiangSu = lat.multiply(new BigDecimal(Math.pow(2, level - 18)));
        BigDecimal lngXiangSu = lng.multiply(new BigDecimal(Math.pow(2, level - 18)));

        latXiangSu = latXiangSu.compareTo(new BigDecimal(0)) >= 0 ? latXiangSu : new BigDecimal(0).subtract(latXiangSu);
        lngXiangSu = lngXiangSu.compareTo(new BigDecimal(0)) >= 0 ? lngXiangSu : new BigDecimal(0).subtract(lngXiangSu);
        return new BigDecimal[]{latXiangSu.setScale(0, BigDecimal.ROUND_HALF_DOWN), lngXiangSu.setScale(0, BigDecimal.ROUND_HALF_DOWN)};
    }

    /**
     * 计算该像素所在的图块的起始像素
     *
     * @param latXiangSu
     * @param lngXiangSu
     * @return
     */
    private static BigDecimal[] caculateBeginXiangSu(BigDecimal latXiangSu, BigDecimal lngXiangSu) {

        int lat = latXiangSu.divide(new BigDecimal(256)).intValue();
        int lng = lngXiangSu.divide(new BigDecimal(256)).intValue();

        BigDecimal resultLat = new BigDecimal(256).multiply(new BigDecimal(lat));
        BigDecimal resultlng = new BigDecimal(256).multiply(new BigDecimal(lng));

        return new BigDecimal[]{resultLat, resultlng};
    }

    /**
     * 根据起始像素坐标获取16个空格的中心坐标
     *
     * @param beginLat
     * @param beginLng
     * @return
     */
    private static LocationGrid[] getGrideByZuoBiao(BigDecimal beginLat, BigDecimal beginLng) {

        LocationGrid[] result = new LocationGrid[16];
        for (int i = 1; i <= 16; i++) {
            result[i - 1] = new LocationGrid(beginLat.add(new BigDecimal(i * 32)),
                    beginLng.add(new BigDecimal(i * 32)));
        }
        return result;
    }

    /**
     * 判断格子是否已经被使用
     *
     * @param bycycleDataModelList
     * @param locationGrid
     * @return 如果已经使用了就返回使用的点的下标。如果没有被使用就返回null
     */
    private static Integer GridIsUsered1(JSONArray arrays, LocationGrid locationGrid) {

        Integer result = null;
        int i = 0;
        for (Object array : arrays) {
            JSONObject jsonObj = JSONObject.fromObject(array);
            if (jsonObj.containsKey(titleHxKey) && jsonObj.containsKey(titleHyKey) && jsonObj.getString(titleHxKey).equals("-1") && jsonObj.getString(titleHyKey).equals("-1")) {
                if (locationGrid.isIntheGrid(new BigDecimal(jsonObj.getString("")), new BigDecimal(jsonObj.getString("")))) {
                    result = i;
                }
            }
            i++;
        }
        return result;

    }

}
