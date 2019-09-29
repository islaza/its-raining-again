import { Component } from "@angular/core";
import { AppService } from "../services/appService";
import { NgForm, NgModel } from "@angular/forms";


@Component({
  selector: "weather-app",
  templateUrl: "./weather-app.component.html"
})
export class WeatherAppComponent {
  public Object = Object;
  public test: any;
  public weatherInfo: any;
  public city: [];
  public forecast: Object = {};
  public searchCity: string = "Vancouver";
  public searchError: boolean = false;

  constructor(private appService: AppService) {
      this.getWeatherInfo();
  }

  ngOnInit() {
    
  }

  async getWeatherInfo(): Promise<any> {
    if (this.searchCity !== null && this.searchCity !== "") {
      this.searchError = false;

      const response = await this.appService.getWeather(this.searchCity);

      if (response) {
        this.city = response.city;
        //Since we have multiple temp for Day, I will group the temperatures by dates
        this.forecast = response.list.reduce((forecast, temp) => {
          //Split date & Time
          const date = temp.dt_txt.split(" ")[0];
          const time = temp.dt_txt.split(" ")[1];
          if (!forecast[date]) {
            forecast[date] = [];
          }

          temp["date"] = date;
          temp["time"] = time;
          temp["image"] = `https://openweathermap.org/img/wn/${
            temp.weather[0].icon
          }@2x.png`;
          forecast[date].push(temp);
          return forecast;
        }, {});
 
      } else {
        this.searchError = true;
      }
    }
  }

  public search(form: NgForm) {
    if (this.searchCity !== null && this.searchCity !== "") {
    }
  }
}
