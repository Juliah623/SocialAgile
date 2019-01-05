import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatCheckboxModule, MatMenuModule, MatExpansionModule,
} from '@angular/material';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { GestionUsuariosComponent } from './gestion-usuarios';
import { ContrasenaComponent } from './gestion-usuarios';
import { LoginComponent } from './gestion-usuarios';
import { RegistroComponent } from './gestion-usuarios';
import { HeaderComponent, CapacitacionesComponent, LegalComponent, MantenimientoComponent } from './principal';
import { FooterComponent } from './principal';
import { HeaderadmonComponent } from './administracion';
import { FooteradmonComponent } from './administracion';
import { AdministracionComponent } from './administracion';
import { PrincipalComponent } from './principal';
import { BodyComponent } from './principal';
import { BodyadmonComponent } from './administracion';
import { HomeComponent } from './principal';
import { GerenciaComponent } from './principal';
import { PerfilUsuarioComponent } from './principal';
import { NoticiasComponent } from './principal';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { LoginService } from './gestion-usuarios/login/login.service';
import { NotificacionesComponent } from './principal';
import { UserService } from './gestion-usuarios/login/user.service';


@NgModule({
  declarations: [
    AppComponent,
    GestionUsuariosComponent,
    ContrasenaComponent,
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
    GerenciaComponent,
    PerfilUsuarioComponent,
    NoticiasComponent,
    NotificacionesComponent,
    CapacitacionesComponent,
    LegalComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RoutesRoutingModule,
    MatMenuModule,
    MatExpansionModule,
    FlexLayoutModule],
  providers: [LoginService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
