import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CrearEstudianteComponent } from './features/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './features/editar-estudiante/editar-estudiante.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { EstudiantesComponent } from './features/estudiantes/estudiantes.component';
import { CursosComponent } from './features/cursos/cursos.component';
import { CrearCursoComponent } from './features/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './features/editar-curso/editar-curso.component';
import { QuestionsComponent } from './features/questions/questions.component';
import { QuestionsTypeComponent } from './features/questions-type/questions-type.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearEstudianteComponent,
    EditarEstudianteComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent,
    EstudiantesComponent,
    CursosComponent,
    CrearCursoComponent,
    EditarCursoComponent,
    QuestionsComponent,
    QuestionsTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
