import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Clima} from '../model/Clima';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  consultarClima(clima: Clima) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${clima.ciudad},${clima.pais}&appid=861e0df564c8eba140891a996d7a3e5b`;
    return this.http.get(url).pipe( map( (resp: any) => {
      return resp;
    }));
  }
}
