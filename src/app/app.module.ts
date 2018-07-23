import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
MatIconModule, MatListModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { RoutesRoutingModule } from './routes/routes-routing.module';

import { AppComponent } from './app.component';
import { GestionUsuariosComponent } from './gestion-usuarios';
import { LoginComponent } from './gestion-usuarios';
import { RegistroComponent } from './gestion-usuarios';
import { PrincipalComponent } from './principal';
import { HeaderComponent } from './principal';
import { FooterComponent } from './principal';
import { HeaderadmonComponent } from './administracion';
import { FooteradmonComponent } from './administracion';
import { PerfilUsuarioComponent } from './principal';
import { EventosComponent } from './principal';
import { AlbumComponent } from './principal';
import { ScrumComponent } from './principal';
import { CoachComponent } from './principal';
import { GerenciaComponent } from './principal';
import { ChatComponent } from './principal';
import { InfoComponent } from './principal';
import { AdministracionComponent } from './administracion';
import { BodyComponent } from './principal';
import { BodyadmonComponent } from './administracion';
import { GruposComponent } from './principal/index';
import { ExpertosComponent } from './principal/index';
import { EncuestasComponent } from './principal/index';
import { LibrosComponent } from './principal/index';

@NgModule({
  declarations: [
    AppComponent,
    GestionUsuariosComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    HeaderComponent,
    HeaderadmonComponent,
    FooterComponent,
    FooteradmonComponent,
    PerfilUsuarioComponent,
    EventosComponent,
    AlbumComponent,
    ScrumComponent,
    CoachComponent,
    GerenciaComponent,
    ChatComponent,
    InfoComponent,
    AdministracionComponent,
    BodyComponent,
    BodyadmonComponent,
    GruposComponent,
    ExpertosComponent,
    EncuestasComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
