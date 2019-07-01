import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursosService } from '../../servicios/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  curso: Curso;

  constructor(
    private _cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute) {
    this.curso = new Curso();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this._cursosService.obtenerCurso(id).subscribe(res => {
      this.curso = res;
    });

  }

  editarCurso() {
    this._cursosService.editarCurso(this.curso)
      .subscribe(() => {
        this.router.navigate(['/cursos']);
      })
  }

  cancelar() {
    this.router.navigate(['/cursos']);
  }

}