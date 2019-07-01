import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { Curso } from '../../models/curso';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
  estudiante: Estudiante;
  cursos: Curso[];

  constructor(private _estudiantesService: EstudiantesService, private _cursosService: CursosService, private router: Router) {
    this.estudiante = new Estudiante();
  }

  ngOnInit() {
    this._cursosService.obtenerCursos().subscribe(data => this.cursos = data);
  }

  crearEstudiante() {
    this._estudiantesService.crearEstudiante(this.estudiante).subscribe(data => {
      this.router.navigate(['/estudiantes']);
    });
  }

  cancelar() {
    this.router.navigate(['/estudiantes']);
  }

}
