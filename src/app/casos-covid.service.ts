import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasosCovidService {

  constructor(private http: HttpClient) { }

  getDatos(){

    return this.http.get("https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json");
  }
}
