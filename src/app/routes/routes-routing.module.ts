import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUsuariosComponent, ContrasenaComponent, LoginComponent, RegistroComponent } from '../gestion-usuarios';
import {
  PrincipalComponent, HomeComponent, CapacitacionesComponent, MantenimientoComponent,
  LegalComponent, GerenciaComponent, PerfilUsuarioComponent,
  NoticiasComponent, NotificacionesComponent
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
        path: 'Capacitaciones', component: CapacitacionesComponent
      },
      {
        path: 'Mantenimiento', component: MantenimientoComponent
      },
      {
        path: 'Legal', component: LegalComponent
      },
      {
        path: 'Gerencia', component: GerenciaComponent
      },
      {
        path: 'Perfil-usuario', component: PerfilUsuarioComponent
      },
      {
        path: 'Noticias', component: NoticiasComponent
      },
      {
        path: 'Notificaciones', component: NotificacionesComponent
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
