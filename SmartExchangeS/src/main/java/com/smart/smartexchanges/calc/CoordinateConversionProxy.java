package com.smart.smartexchanges.calc;

import java.math.BigDecimal;

/**
 * 经纬度与平面坐标的转换代理类
 * @author dangrn
 *
 */
public class CoordinateConversionProxy {

	/**
	 * utm坐标转换成经纬度
	 * @param UTM
	 * @return
	 */
	 public static double[] utm2LatLon(String UTM){
		 
		 return new CoordinateConversion(). utm2LatLon( UTM);
	 }
	 
	 /**
	  * 经纬度转utm坐标
	  * @param latitude
	  * @param longitude
	  * @return
	  */
	 public static  String latLon2UTM(double latitude, double longitude){
		 
		 return new CoordinateConversion().latLon2UTM( latitude, longitude);
	 }
	 
	 /**
	  * 经纬转MGRUTM坐标
	  * @param latitude
	  * @param longitude
	  * @return
	  */
	 public static String latLon2MGRUTM(double latitude, double longitude){
		 
		 return new CoordinateConversion().latLon2MGRUTM( latitude,  longitude);
	 }
	 
	 /**
	  * MGRUTM坐标 转经纬度
	  * @param MGRUTM
	  * @return
	  */
	 public static double[] mgrutm2LatLon(String MGRUTM){
		 
		 return new CoordinateConversion(). mgrutm2LatLon(MGRUTM);
	 }
	 
	 /**
	  * 百度地图的经纬度转平面坐标
	  * @param latitude 纬度
	  * @param longitude 经度
	  * @return
	  */
	  public static BigDecimal[] baidulatlon2UTM(double latitude, double longitude){
		  return new CoordinateConversion().baidulatlon2UTM(latitude, longitude);
	  }
}
