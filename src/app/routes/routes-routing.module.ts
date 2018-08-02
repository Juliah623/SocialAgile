import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUsuariosComponent, ContrasenaComponent, LoginComponent, RegistroComponent } from '../gestion-usuarios';
import {
  PrincipalComponent, HomeComponent, EventosComponent, ScrumComponent, CoachComponent, GruposComponent,
  LibrosComponent, InfoComponent, IdiComponent, GerenciaComponent, PerfilUsuarioComponent,
  AlbumComponent, EncuestasComponent, NoticiasComponent, ServiciosComponent
} from '../principal';

const routes: Routes = [
  { path: 'Gestion-usuarios', component: GestionUsuariosComponent },
  { path: 'Contrasena', component: ContrasenaComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent },
  {
    path: 'Principal', component: PrincipalComponent, children: [
      {
        path: 'Home', component: HomeComponent
      },
      {
        path: 'Eventos', component: EventosComponent
      },
      {
        path: 'Scrum', component: ScrumComponent
      },
      {
        path: 'Coach', component: CoachComponent
      },
      {
        path: 'Grupos', component: GruposComponent
      },
      {
        path: 'Libros', component: LibrosComponent
      },
      {
        path: 'Info', component: InfoComponent
      },
      {
        path: 'Idi', component: IdiComponent
      },
      {
        path: 'Servicios', component: ServiciosComponent
      },
      {
        path: 'Gerencia', component: GerenciaComponent
      },
      {
        path: 'Perfil-usuario', component: PerfilUsuarioComponent
      },
      {
        path: 'Album', component: AlbumComponent
      },
      {
        path: 'Encuenstas', component: EncuestasComponent
      },
      {
        path: 'Noticias', component: NoticiasComponent
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
