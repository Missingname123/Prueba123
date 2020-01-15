import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SlideshowModule} from 'ng-simple-slideshow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error-component/error-component.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ProductosComponent } from './productos/productos.component';
import { CrearComponent } from './crear/crear.component';
import { ComentariosComponent } from './comentarios/comentarios.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsuariosComponent,
    ErrorComponent,
    ProductosComponent,
    CrearComponent,
    ComentariosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SlideshowModule,
    ReactiveFormsModule,
  // FIREBASE
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [

    AngularFirestore,
    AngularFireAuth

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
