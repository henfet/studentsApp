import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Curso } from '../../models/curso';
import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];

  constructor(private _cursoService: CursosService, private router: Router) { }

  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos() {
    this._cursoService.obtenerCursos().subscribe(data => {
      this.cursos = data;
    })
  }

  eliminarCurso(id: string) {
    const res = confirm("Desea eliminar al curso " + id + "?");
    if (res) {
      this._cursoService.eliminarCurso(id).subscribe(() =>
        this.obtenerCursos()
      )
    };
  }

  crearCurso() {
    this.router.navigate(['/cursos/crear']);
  }

  editarCurso(id: string) {
    this.router.navigate(['/cursos/editar', id]);
  }

}
