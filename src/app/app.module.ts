import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GenerarVueloComponent } from './components/generar-vuelo/generar-vuelo.component';
import { ListadoVuelosComponent } from './components/listado-vuelos/listado-vuelos.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const appRoutes: Routes = [
  { path: 'generar', component: GenerarVueloComponent },
  { path: 'listadoVuelos',      component: ListadoVuelosComponent },
  { path: '**', component: GenerarVueloComponent  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenerarVueloComponent,
    ListadoVuelosComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


