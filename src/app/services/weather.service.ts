import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { weather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  key: string = 'key=e4f41940ca8d4335a6691935220908';

  constructor(private http: HttpClient) { 
  
  }

  getWeather(cityName: string): weather {
    /*return this.http.get(`http://api.weatherapi.com/v1/current.json?${this.key}&q=${cityName}`).subscribe(info => {
      console.log(info);
    })*/

    this.http.get(`http://api.weatherapi.com/v1/current.json?${this.key}&q=${cityName}`).subscribe((info: any) =>{
      var weather: weather = {
          country: info.location.country,
          name: info.location.name,
          temp_c: info.current.temp_c,
          icon: info.current.condition.icon
      }
      console.log(weather);
      return weather;
    });
    return {
      country: "",
      name: "",
      temp_c : "",
      icon: ""};
  }
  
}
