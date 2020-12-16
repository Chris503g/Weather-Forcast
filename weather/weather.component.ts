import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myDate = Date.now();
  myDate2 = Date.now() + 24 * 60 * 60 * 1000;
  myDate3 = Date.now() + (24 * 60 * 60 * 1000)*2;
  myDate4 = Date.now() + (24 * 60 * 60 * 1000)*3;
  myDate5 = Date.now() + (24 * 60 * 60 * 1000)*4;
  myDate6 = Date.now() + (24 * 60 * 60 * 1000)*5;
  myDate7 = Date.now() + (24 * 60 * 60 * 1000)*6;

  WeatherData:any;
  WeatherData2:any;
  WeatherData3:any;
  WeatherData4:any;
  WeatherData5:any;
  WeatherData6:any;
  WeatherData7:any;
  constructor() { }


  ngOnInit(){
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.WeatherData2 = {
      main : {},
      isDay: true
    };
    this.WeatherData3 = {
      main : {},
      isDay: true
    };
    this.WeatherData4 = {
      main : {},
      isDay: true
    };
    this.WeatherData5 = {
      main : {},
      isDay: true
    };
    this.WeatherData6 = {
      main : {},
      isDay: true
    };
    this.WeatherData7 = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
    this.getWeatherData2();
    console.log(this.WeatherData2);
    this.getWeatherData3();
    console.log(this.WeatherData3);
    this.getWeatherData4();
    console.log(this.WeatherData4);
    this.getWeatherData5();
    console.log(this.WeatherData5);
    this.getWeatherData6();
    console.log(this.WeatherData6);
    this.getWeatherData7();
    console.log(this.WeatherData7);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=6.2088&lon=106.8456&exclude=minutely,hourly,alerts&appid=75f224a9280b9d612de738569c117dbb')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    
  }


  getWeatherData2(){
    fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=6.2088&lon=106.8456&dt=1608091200&appid=48c20bc83d40b87c5c4916f22048f261')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data2=>{this.setWeatherData2(data2);})
    
  }

  getWeatherData3(){
    fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=6.2088&lon=106.8456&dt=1608177600&appid=eadbc9eb76bdc79b507598bc528dafa7')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data3=>{this.setWeatherData3(data3);})
    
  }

  getWeatherData4(){
    fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=6.2088&lon=106.8456&dt=1608264000&appid=365464cb4b4764eea0df8a2232678c5a')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data4=>{this.setWeatherData4(data4);})
    
  }

  getWeatherData5(){
    fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=6.2088&lon=106.8456&dt=1608350400&appid=2070571c07239e7d5497eb312394b3aa')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data5=>{this.setWeatherData5(data5);})
    
  }

  getWeatherData6(){
    fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=6.2088&lon=106.8456&dt=1608436800&appid=46ce7847e83df7187b5c9b38ce13ebbc')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data6=>{this.setWeatherData6(data6);})
    
  }

  getWeatherData7(){
    fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=6.2088&lon=106.8456&dt=1608523200&appid=59186581c68915b4109352c7f45ac07f')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data7=>{this.setWeatherData7(data7);})
    
  }
  setWeatherData(data: any){
    this.WeatherData = data;
    //let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);



  }
  setWeatherData2(data2: any){
    this.WeatherData2 = data2;
    /*//let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);*/

    this.WeatherData2.temp_celcius = (this.WeatherData2.current.temp - 273.15).toFixed(0);
    this.WeatherData2.wind_speed = (this.WeatherData2.current.wind_speed).toFixed(0);
  }
  setWeatherData3(data3: any){
    this.WeatherData3 = data3;
    /*//let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);*/
    this.WeatherData3.temp_celcius3 = (this.WeatherData3.current.temp - 273.15).toFixed(0);
    this.WeatherData3.wind_speed = (this.WeatherData3.current.wind_speed).toFixed(0);
  }
  setWeatherData4(data4: any){
    this.WeatherData4 = data4;
    /*//let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);*/
    this.WeatherData4.temp_celcius = (this.WeatherData4.current.temp - 273.15).toFixed(0);
    this.WeatherData4.wind_speed = (this.WeatherData4.current.wind_speed).toFixed(0);
  }
  setWeatherData5(data5: any){
    this.WeatherData5 = data5;
    /*//let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);*/
    this.WeatherData5.temp_celcius = (this.WeatherData5.current.temp - 273.15).toFixed(0);
    this.WeatherData5.wind_speed = (this.WeatherData5.current.wind_speed).toFixed(0);
  }
  setWeatherData6(data6: any){
    this.WeatherData6 = data6;
    /*//let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);*/
    this.WeatherData6.temp_celcius = (this.WeatherData6.current.temp - 273.15).toFixed(0);
    this.WeatherData6.wind_speed = (this.WeatherData6.current.wind_speed).toFixed(0);
  }
  setWeatherData7(data7: any){
    this.WeatherData7 = data7;
    /*//let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);*/
    this.WeatherData7.temp_celcius = (this.WeatherData7.current.temp - 273.15).toFixed(0);
    this.WeatherData7.wind_speed = (this.WeatherData7.current.wind_speed).toFixed(0);
    
  }
}