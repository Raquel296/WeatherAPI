import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { weather} from './interfaces/weather.interface';
import {WeatherService} from './services/weather.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;

  title = 'weather-api';

  weather: weather = { 
    country: "",
    name: "",
    temp_c : "",
    icon: ""};

  constructor(public weatherService: WeatherService, private fb:FormBuilder){
    this.form = this.fb.group({
      cityName: ['', Validators.required]
    })

    //console.log(weatherService.getWeather.arguments);
    
  }


  ngOnInit(){
   this.weather = this.getWeather("Madrid");
  }

  getWeather(cityName: string){
    return this.weatherService.getWeather(cityName);
  }

  submit(cityName: HTMLInputElement){

      const city: string = this.form.get('cityName')?.value
      this.weather = this.getWeather(city);

      console.log(this.weather);

        this.form.reset();

        return false;
    }
   


}



