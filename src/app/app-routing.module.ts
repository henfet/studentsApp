import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { EstudiantesComponent } from './features/estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './features/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './features/editar-estudiante/editar-estudiante.component';
import { CursosComponent } from './features/cursos/cursos.component';
import { CrearCursoComponent } from './features/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './features/editar-curso/editar-curso.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { QuestionsComponent } from './features/questions/questions.component';
import { QuestionsTypeComponent } from './features/questions-type/questions-type.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'estudiantes/crear', component: CrearEstudianteComponent },
  { path: 'estudiantes/editar/:id', component: EditarEstudianteComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/crear', component: CrearCursoComponent },
  { path: 'cursos/editar/:id', component: EditarCursoComponent },
  { path: 'preguntas', component: QuestionsComponent },
  { path: 'tiposPregunta', component: QuestionsTypeComponent },
  { path: '**', component: PaginaNoSeEncuentraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
