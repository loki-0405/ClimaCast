package com.example.Weather_Api.Controller;
import com.example.Weather_Api.Model.WeatherResponse;
import com.example.Weather_Api.Service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/weather/api")
public class Weathercontroller {

     @Autowired
    private WeatherService weatherService;

     @GetMapping("/{city}")
    public WeatherResponse getWeather(@PathVariable String city){
         return weatherService.getWeatherByCity(city);
     }


}
