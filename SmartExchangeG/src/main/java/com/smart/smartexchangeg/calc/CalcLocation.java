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

    public static JSONObject LocationDataAccess1(JSONArray jsonArrays, String latKey, String lngKey) {
        if (jsonArrays == null) {
            return null;
        }
        JSONObject resultObject = new JSONObject();
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
                jsonObj.accumulate(titleHyKey, xiangSuZuoBiao[1]);
                BigDecimal titlex = new BigDecimal(xiangSuZuoBiao[0].divide(new BigDecimal(256)).intValue());
                BigDecimal titley = new BigDecimal(xiangSuZuoBiao[1].divide(new BigDecimal(256)).intValue());
                boolean isExistDom = false;
                JSONObject jsonLevelTemp = null;
                int iLevelTemp = 0;
                int effect=4;
                if (level <= 18) {
                    for (; iLevelTemp < jsonArrayLevel.size(); iLevelTemp++) {
                        jsonLevelTemp = JSONObject.fromObject(jsonArrayLevel.get(iLevelTemp));

//                        if (new BigDecimal(jsonLevelTemp.getString(titleHxKey)).divide(new BigDecimal(256)).divide(new BigDecimal(effect)).toString().equals(xiangSuZuoBiao[0].divide(new BigDecimal(256)).divide(new BigDecimal(effect)).toString())
//                                && new BigDecimal(jsonLevelTemp.getString(titleHyKey)).divide(new BigDecimal(256)).divide(new BigDecimal(effect)).toString().equals(xiangSuZuoBiao[1].divide(new BigDecimal(256)).divide(new BigDecimal(effect)).toString())) {
//                            isExistDom = true;
//                            break;
//                        }
                        if (jsonLevelTemp.getString(titlexKey).equals(titlex.toString()) && jsonLevelTemp.getString(titleyKey).equals(titley.toString())) {
                                isExistDom = true;
                                break;
                            }
                    }
                    if (isExistDom) {
                        jsonArrayLevel.remove(iLevelTemp);
                        jsonLevelTemp.remove(icoTypeKey);
                        jsonLevelTemp.accumulate(icoTypeKey, 2);
                        jsonArrayLevel.add(jsonLevelTemp);
                        continue;
                    }
                }

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
                jsonObj.accumulate(titleyKey, new BigDecimal(xiangSuZuoBiao[1].divide(new BigDecimal(256)).intValue()));
                jsonObj.accumulate(icoTypeKey, 1);
                jsonArrayLevel.add(jsonObj);

            }
            resultObject.accumulate(level + "", jsonArrayLevel);
        }

        return resultObject;
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
