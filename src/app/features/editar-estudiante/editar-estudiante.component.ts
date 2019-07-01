import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from '../../servicios/cursos.service';
import { Curso } from '../../models/curso';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  cursos: Curso[];
  estudiante: Estudiante;

  constructor(
    private _cursosService: CursosService,
    private _estudiantesService: EstudiantesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.estudiante = new Estudiante();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this._cursosService.obtenerCursos().subscribe(res => {
      this.cursos = res;
    });

    this._estudiantesService.obtenerEstudiante(id).subscribe(res => {
      this.estudiante = res;
    });

    this.router.events.subscribe(id => console.log(id));
  }

  editarEstudiante() {
    this._estudiantesService.editarEstudiante(this.estudiante)
      .subscribe(() => {
        this.router.navigate(['/estudiantes']);
      })
  }

  cancelar() {
    this.router.navigate(['/estudiantes']);
  }

}
