package com.smart.smartexchangem.zst.location;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class LocationDataAccessUtil {

    /**
     * 自行车位置数据处理，计算出1-18个层级的各个图块的最佳位置
     *
     * @param dataString 自行车位置数据（json格式）
     * @return
     * @throws CloneNotSupportedException
     */
    public static Set<BycycleDataModel> LocationDataAccess(String dataString) {

        //获取原始位置数据
        JSONObject jsonObject = JSONObject.parseObject(dataString);

        List<BycycleDataModel> bycycleDataModelList = JSON.parseArray(jsonObject.get("station").toString(), BycycleDataModel.class);

        List<BycycleDataModel> resultList = new ArrayList<BycycleDataModel>();
//        Map<Integer, BycycleDataModel> resultMap = new HashMap<Integer, BycycleDataModel>();
        Set<BycycleDataModel> resultSet = new HashSet<>();

        //逐一遍历自行车站点位置
        for (int i = 0; i < bycycleDataModelList.size(); i++) {
            BycycleDataModel bycycleDataModel = bycycleDataModelList.get(i);
            //遍历每个级别
            for (int level = 1; level <= 18; level++) {
                BycycleDataModel newBycycleDataModel;
                try {
                    newBycycleDataModel = (BycycleDataModel) bycycleDataModel.clone();
                } catch (CloneNotSupportedException e) {
//                    return "运算时出错" + e.getMessage();
                    return null;
                }
                newBycycleDataModel.setLevel(level);//设置级别
                resultList.add(newBycycleDataModel);//添加到返回数据列表中

                //获取平面坐标
                BigDecimal[] pingMianZuoBiao = CoordinateConversionProxy
                        .baidulatlon2UTM(newBycycleDataModel.getLat(), newBycycleDataModel.getLng());
                //获取像素坐标
                BigDecimal[] xiangSuZuoBiao = cacutalteXiangSuZuoBiao(pingMianZuoBiao[0], pingMianZuoBiao[1], level);
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
                    Integer user = GridIsUsered(resultList, locationGrid);
                    if (user != null) {//格子已经被使用
                        BycycleDataModel old = resultList.get(user);

                        //获取占用点的平面坐标
                        BigDecimal[] oldPingMianZuoBiao = CoordinateConversionProxy
                                .baidulatlon2UTM(old.getLat(), old.getLng());
                        //获取占用点的像素坐标// x表示当地的纬度lat,y表示当地的经度lng
                        BigDecimal[] oldPSuZuoBiao = cacutalteXiangSuZuoBiao(oldPingMianZuoBiao[0], oldPingMianZuoBiao[1], level);

                        Double oldJuli = locationGrid.GetDistanceToCenter(oldPSuZuoBiao[0], oldPSuZuoBiao[1]);
                        Double currentJuli = locationGrid.GetDistanceToCenter(xiangSuZuoBiao[0], xiangSuZuoBiao[1]);
                        if (Double.compare(oldJuli, currentJuli) >= 0) {//旧的距离大
                            SetRemoveById(resultSet, old.getId(), level);
                            newBycycleDataModel.setTileX(xiangSuZuoBiao[0].divide(new BigDecimal(256)));
                            newBycycleDataModel.setTileY(xiangSuZuoBiao[1].divide(new BigDecimal(256)));
                            resultSet.add(newBycycleDataModel);
                            old.setTileX(new BigDecimal(-1));
                            old.setTileY(new BigDecimal(-1));

                        } else {//新的距离大
                            newBycycleDataModel.setTileX(new BigDecimal(-1));
                            newBycycleDataModel.setTileY(new BigDecimal(-1));
                        }

                    } else {//格子没有被使用
                        newBycycleDataModel.setTileX(xiangSuZuoBiao[0].divide(new BigDecimal(256)));
                        newBycycleDataModel.setTileY(xiangSuZuoBiao[1].divide(new BigDecimal(256)));

                        resultSet.add(newBycycleDataModel);
                    }
                }

            }
        }

//        return JSON.toJSON(resultList).toString();
        return resultSet;
    }

    public static BigDecimal[] GetXiangSuXY(String lat, String lng, int level) {
        //获取占用点的平面坐标
        BigDecimal[] oldPingMianZuoBiao = CoordinateConversionProxy
                .baidulatlon2UTM(Double.parseDouble(lat), Double.parseDouble(lng));
        //获取占用点的像素坐标
        return cacutalteXiangSuZuoBiao(oldPingMianZuoBiao[0], oldPingMianZuoBiao[1], level);
    }

    public static void SetRemoveById(Set<BycycleDataModel> sets, Integer id, Integer level) {
        Iterator iterator = sets.iterator();
        while (iterator.hasNext()) {
            BycycleDataModel next = (BycycleDataModel) iterator.next();
            if (next.getId() == id && next.getLevel() != null && next.getLevel() == level) {
                iterator.remove();
                break;
            }
        }
    }

    /**
     * 计算像素坐标
     *
     * @param lat 纬度
     * @param lng 经度
     * @param level 等级
     * @return
     */
    private static BigDecimal[] cacutalteXiangSuZuoBiao(BigDecimal lat, BigDecimal lng, int level) {

        BigDecimal latXiangSu = lat.multiply(new BigDecimal(Math.pow(2, level - 18)));
        BigDecimal lngXiangSu = lng.multiply(new BigDecimal(Math.pow(2, level - 18)));

        latXiangSu = latXiangSu.compareTo(new BigDecimal(0)) >= 0 ? latXiangSu : new BigDecimal(0).subtract(latXiangSu);
        lngXiangSu = lngXiangSu.compareTo(new BigDecimal(0)) >= 0 ? lngXiangSu : new BigDecimal(0).subtract(lngXiangSu);
        return new BigDecimal[]{latXiangSu, lngXiangSu};
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
    private static Integer GridIsUsered(List<BycycleDataModel> bycycleDataModelList, LocationGrid locationGrid) {

        Integer result = null;
        for (int i = 0; i < bycycleDataModelList.size(); i++) {
            BycycleDataModel bycycleDataModel = bycycleDataModelList.get(i);

            if (bycycleDataModel.getTileX() != null && bycycleDataModel.getTileX() != new BigDecimal(-1)) {
                if (bycycleDataModel.getTileY() != null && bycycleDataModel.getTileY() != new BigDecimal(-1)) {
                    if (locationGrid.isIntheGrid(bycycleDataModel.getTileX(), bycycleDataModel.getTileY())) {
                        result = i;
                    }
                }
            }
        }
        return result;

    }
}
