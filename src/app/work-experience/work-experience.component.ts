import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private workExperienceService: WorkExperienceService) {}

  puesto: string = "Data Scientist";
  empresa: string = "Oracle";
  fecha_ini: string = "08/2020"; // Mantén el nombre en snake_case para coincidir con la respuesta JSON
  fecha_fin: string = "10/2022"; // Mantén el nombre en snake_case para coincidir con la respuesta JSON
  ciudad: string = "San Francisco";
  pais: string = "USA";
  logros: string[] = ["Vacuna", "Medicina"];

  ngOnInit(): void {
    this.workExperienceService.getWorkExperience()
      .subscribe((data: any) => {
        console.log(data);
        // Asigna los datos de experiencia laboral desde la respuesta JSON
        this.puesto = data.puesto;
        this.empresa = data.empresa;
        this.fecha_ini = data.fecha_ini;
        this.fecha_fin = data.fecha_fin;
        this.ciudad = data.ciudad;
        this.pais = data.pais;
        // Mapea los logros desde la respuesta JSON
        this.logros = data.logros.map((logro: any) => logro.logro);
      });
  }
}

