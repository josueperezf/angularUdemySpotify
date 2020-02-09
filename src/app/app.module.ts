import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { SearchComponent } from './componentes/search/search.component';
import { NoImagenPipe } from './pipe/no-imagen.pipe';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { LoadingComponent } from './componentes/shared/loading/loading.component';
import { DomSeguroPipe } from './pipe/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    SearchComponent,
    NoImagenPipe,
    TarjetasComponent,
    LoadingComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
