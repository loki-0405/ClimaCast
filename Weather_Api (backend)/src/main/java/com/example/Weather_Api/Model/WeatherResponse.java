package com.example.Weather_Api.Model;

import com.sun.tools.javac.Main;
import lombok.Data;

@Data
public class WeatherResponse {
    private String name;
    private Main main;
    private Weather[] weather;

    @Data
    public static class Main{
        private double temp;
        private int humidity;
    }

    @Data
    public static class Weather{
        String description;
    }
}
