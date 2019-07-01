import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:62542/api/cursos';
  }

  obtenerCursos() {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  eliminarCurso(id: string) {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url);
  }

  crearCurso(curso: Curso) {
    return this.http.post(this.apiUrl, curso);
  }

  editarCurso(curso: Curso) {
    const url = `${this.apiUrl}/${curso.id}`
    curso['userInfoDto'] = {
      "userId": "halvarado",
      "plantId": "HK",
      "languageId": "es",
      "applicationId": "string",
      "computerName": "string",
      "form": "string",
      "windowsUser": "string"
    };
  
    return this.http.put(url, curso);
  }

  obtenerCurso(id: number) {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Curso>(url);
  }

}
