import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from '../../servicios/estudiantes.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  searchValue: number;

  constructor(private _estudiantesServices: EstudiantesService, private router: Router) { }

  ngOnInit() {
  }

  irAEstudiantes() {
    this.router.navigate(['/estudiantes']);
  }

  irACrearEstudiante() {
    this.router.navigate(['/estudiantes/crear']);
  }

  irACursos() {
    this.router.navigate(['/curso']);
  }

  irACrearCurso() {
    this.router.navigate(['/curso/crear']);
  }

  buscarEstudiante(id: number) {
    this.router.navigate(['/estudiantes/editar', id]);
  }

}
