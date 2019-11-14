import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClimaService} from './service/clima.service';
import {Clima} from './model/Clima';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clima: Clima = new Clima({
    ciudad: '',
    pais: ''
  });
  maxtmp: string = '';
  mintmp: string = '';
  error: string = '';
  title = 'pruebaClima';

  constructor(private climaService: ClimaService){}

  consultarClima() {
    this.error = '';
    const kelvin = 273.15;
    if (this.clima.ciudad === '' || this.clima.pais === '') {
      return;
    }
    this.climaService.consultarClima(this.clima)
      .subscribe(resp => {
        console.log(resp.main);
        this.mintmp = (resp.main.temp_min - kelvin).toFixed(0);
        this.maxtmp = (resp.main.temp_max - kelvin).toFixed(0);
      }, error => {
        this.maxtmp = '';
        this.mintmp = '';
        this.error = 'Error al realizar la consulta';
      });

  }

  resetear() {
    this.maxtmp = '';
    this.mintmp = '';
    this.error = '';
  }

}
