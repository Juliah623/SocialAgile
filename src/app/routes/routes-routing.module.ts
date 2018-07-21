import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PrincipalComponent, AlbumComponent, ChatComponent, CoachComponent, EventosComponent,
  GerenciaComponent, InfoComponent, PerfilUsuarioComponent, ScrumComponent, BodyComponent
} from '../principal';
import { GestionUsuariosComponent, LoginComponent, RegistroComponent } from '../gestion-usuarios';

const routes: Routes = [
  // se crean independientes? o con forchild?
  { path: 'Gestion-usuarios', component: GestionUsuariosComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent },
  {
    path: 'Principal', component: PrincipalComponent, children: [
      {
        path: 'Album', component: AlbumComponent
      },
      {
        path: 'Chat', component: ChatComponent
      },
      {
        path: 'Coach', component: CoachComponent
      },
      {
        path: 'Eventos', component: EventosComponent
      },
      {
        path: 'Gerencia', component: GerenciaComponent
      },
      {
        path: 'Info', component: InfoComponent
      },
      {
        path: 'Perfil-usuario', component: PerfilUsuarioComponent
      },
      {
        path: 'Scrum', component: ScrumComponent
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
