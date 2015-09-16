package com.smart.smartexchangeg.calc;

import java.math.BigDecimal;

public class LocationGrid {

    private BigDecimal centerX;
    private BigDecimal centerY;

    private BigDecimal beginX;
    private BigDecimal beginY;
    private BigDecimal endX;
    private BigDecimal endY;

    public BigDecimal getCenterX() {
        return centerX;
    }

    public void setCenterX(BigDecimal centerX) {
        this.centerX = centerX;
    }

    public BigDecimal getCenterY() {
        return centerY;
    }

    public void setCenterY(BigDecimal centerY) {
        this.centerY = centerY;
    }

    public BigDecimal getBeginX() {
        return beginX;
    }

    public void setBeginX(BigDecimal beginX) {
        this.beginX = beginX;
    }

    public BigDecimal getBeginY() {
        return beginY;
    }

    public void setBeginY(BigDecimal beginY) {
        this.beginY = beginY;
    }

    public BigDecimal getEndX() {
        return endX;
    }

    public void setEndX(BigDecimal endX) {
        this.endX = endX;
    }

    public BigDecimal getEndY() {
        return endY;
    }

    public void setEndY(BigDecimal endY) {
        this.endY = endY;
    }

    public LocationGrid(BigDecimal centerX, BigDecimal centerY) {
        super();
        this.centerX = centerX;
        this.centerY = centerY;

        this.beginX = centerX.subtract(new BigDecimal(32));
        this.beginY = centerY.subtract(new BigDecimal(32));
        this.endX = centerX.add(new BigDecimal(32));
        this.endY = centerY.add(new BigDecimal(32));

    }

    public LocationGrid() {
        super();
    }

    /**
     * 获取某坐标到该格子中心的距离
     *
     * @param coordinateX x坐标
     * @param coordinateY y坐标
     * @return
     */
    public Double GetDistanceToCenter(BigDecimal coordinateX, BigDecimal coordinateY) {
        BigDecimal X = coordinateX.subtract(centerX).pow(2);
        BigDecimal Y = coordinateY.subtract(centerY).pow(2);
        return Math.sqrt(Double.parseDouble(X.add(Y).toString()));
    }

    /**
     * 判断都像素坐标是否在格子内
     *
     * @param coordinateX
     * @param coordinateY
     * @return
     */
    public boolean isIntheGrid(BigDecimal coordinateX, BigDecimal coordinateY) {
        boolean result = false;
        if (beginX.compareTo(coordinateX) <= 0 && endX.compareTo(coordinateX) > 0) {
            if (beginY.compareTo(coordinateY) <= 0 && endY.compareTo(coordinateY) > 0) {
                result = true;
            }
        }

        return result;
    }

}
