import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Hay que importar este modulo para que funcione ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Components/correo/correo.component';
import { ListaCorreosComponent } from './Components/lista-correos/lista-correos.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Tambien se tiene que añadir aquí.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
