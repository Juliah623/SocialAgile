import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatCheckboxModule
} from '@angular/material';
import { RoutesRoutingModule } from './routes/routes-routing.module';

import { AppComponent } from './app.component';
import { GestionUsuariosComponent } from './gestion-usuarios';
import { LoginComponent } from './gestion-usuarios';
import { RegistroComponent } from './gestion-usuarios';
import { HeaderComponent } from './principal';
import { FooterComponent } from './principal';
import { HeaderadmonComponent } from './administracion';
import { FooteradmonComponent } from './administracion';
import { AdministracionComponent } from './administracion';
import { PrincipalComponent } from './principal';
import { BodyComponent } from './principal';
import { BodyadmonComponent } from './administracion';
import { HomeComponent } from './principal';
import { EventosComponent } from './principal';
import { ScrumComponent } from './principal';
import { CoachComponent } from './principal';
import { GruposComponent } from './principal';
import { LibrosComponent } from './principal';
import { InfoComponent } from './principal';
import { IdiComponent } from './principal';
import { ChatComponent } from './principal';
import { GerenciaComponent } from './principal';
import { PerfilUsuarioComponent } from './principal';
import { AlbumComponent } from './principal';
import { EncuestasComponent } from './principal';
import { NoticiasComponent } from './principal';


@NgModule({
  declarations: [
    AppComponent,
    GestionUsuariosComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    HeaderadmonComponent,
    FooterComponent,
    FooteradmonComponent,
    AdministracionComponent,
    PrincipalComponent,
    BodyComponent,
    BodyadmonComponent,
    HomeComponent,
    EventosComponent,
    ScrumComponent,
    CoachComponent,
    GruposComponent,
    LibrosComponent,
    InfoComponent,
    IdiComponent,
    ChatComponent,
    GerenciaComponent,
    PerfilUsuarioComponent,
    AlbumComponent,
    EncuestasComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
