import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  public getWeather(city: string) {
    const appId: string = "e88a1564dd57e617642dc21b9ea2e2a8";
    return this.http
      .get<any>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}&units=metric`
      )
      .pipe(
        map(res => {
          return res;
        })
      )
      .toPromise()
      .catch(res => {
        return false;
       
      });
  }

  
}
