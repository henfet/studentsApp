import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[];

  constructor(private _estudianteService: EstudiantesService, private router: Router) { }

  ngOnInit() {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this._estudianteService.obtenerEstudiantes().subscribe(data => {
      this.estudiantes = data;
    })
  }

  eliminarEstudiante(id: string) {
    const res = confirm("Desea eliminar al estudiante " + id + "?");
    if (res) {
      this._estudianteService.eliminarEstudiante(id).subscribe(() =>
        this.obtenerEstudiantes()
      )
    };
  }

  crearEstudiante() {
    this.router.navigate(['/estudiantes/crear']);
  }

  editarEstudiante(id: string) {
    this.router.navigate(['/estudiantes/editar', id]);
  }

}
