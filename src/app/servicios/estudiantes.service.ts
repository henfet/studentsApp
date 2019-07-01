import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  apiURL = "http://localhost:62542/api/Estudiantes";

  constructor(private http: HttpClient) { }

  obtenerEstudiantes() {
    const url = `${this.apiURL}?_expand=curso`
    return this.http.get<Estudiante[]>(url);
  }

  eliminarEstudiante(id: string) {
    const url = `${this.apiURL}/${id}`
    return this.http.delete(url);
  }

  crearEstudiante(estudiante: Estudiante) {
    return this.http.post(this.apiURL, estudiante);
  }

  editarEstudiante(estudiante: Estudiante) {
    const url = `${this.apiURL}/${estudiante.id}`
    estudiante['userInfoDto'] = {
      "userId": "halvarado",
      "plantId": "HK",
      "languageId": "es",
      "applicationId": "string",
      "computerName": "string",
      "form": "string",
      "windowsUser": "string"
    };

    return this.http.put(url, estudiante);
  }

  obtenerEstudiante(id: number) {
    const url = `${this.apiURL}/${id}?_expand=curso`
    return this.http.get<Estudiante>(url);
  }

}
