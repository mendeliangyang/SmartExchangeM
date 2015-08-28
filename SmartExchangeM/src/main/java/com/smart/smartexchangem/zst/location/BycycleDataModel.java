package com.smart.smartexchangem.zst.location;

import java.math.BigDecimal;

public class BycycleDataModel {
	private Integer id;
	private String name;
	private Double lat;
	private Double lng;
	private Integer capacity;
	private Integer availBike;
	private String address;
	
	private Integer level;//级别
	private BigDecimal tileX; //x坐标
	private BigDecimal tileY; //y坐标
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getCapacity() {
		return capacity;
	}
	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}
	public Integer getAvailBike() {
		return availBike;
	}
	public void setAvailBike(Integer availBike) {
		this.availBike = availBike;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getLevel() {
		return level;
	}
	public void setLevel(Integer level) {
		this.level = level;
	}

	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLng() {
		return lng;
	}
	public void setLng(Double lng) {
		this.lng = lng;
	}
	public BigDecimal getTileX() {
		return tileX;
	}
	public void setTileX(BigDecimal tileX) {
		this.tileX = tileX;
	}
	public BigDecimal getTileY() {
		return tileY;
	}
	public void setTileY(BigDecimal tileY) {
		this.tileY = tileY;
	}
	
	@Override
	protected Object clone() throws CloneNotSupportedException {
		BycycleDataModel result = new BycycleDataModel();
		result.setId(this.getId());
		result.setLat(this.getLat());
		result.setLng(this.getLng());
		result.setName(this.getName());
		result.setCapacity(this.getCapacity());
		result.setAddress(this.getAddress());
		result.setAvailBike(this.getAvailBike());
		return result;
	}

}
