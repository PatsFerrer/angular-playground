import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // aqui ficam todos os componentes, diretivas e pipes
  declarations: [
    AppComponent
  ],
  // aqui pode importar outros módulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // aqui ficam o que eu quero fornecer para outros módulos
  exports: [], // não vem por padrão nesse módulo principal, pois não faz sentido
  providers: [], // aqui fica nossa injeção de dependência 
  bootstrap: [AppComponent] // define o componente inicial
})
export class AppModule { }
