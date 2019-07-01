import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  curso: Curso;

  constructor(private _cursosService: CursosService, private router: Router) {
    this.curso = new Curso();
  }

  ngOnInit() { }

  crearCurso() {
    this._cursosService.crearCurso(this.curso).subscribe(data => {
      this.router.navigate(['/cursos']);
    });
  }

  cancelar() {
    this.router.navigate(['/cursos']);
  }

}