package com.example.Weather_Api.Service;

import com.example.Weather_Api.Model.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    @Value("${weather.api.key}")
    private String apikey;

    @Value("${weather.api.url}")
    private String apiurl;

    private final RestTemplate restTemplate = new RestTemplate();

    public WeatherResponse getWeatherByCity(String city){
        String url = String.format("%s?q=%s&appid=%s&units=metric", apiurl, city, apikey);
        System.out.println("url "+ url );
        return restTemplate.getForObject(url, WeatherResponse.class);
    }


}
