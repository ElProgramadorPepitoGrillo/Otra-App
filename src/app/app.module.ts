import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './Componente1/Componente1.component';
import { Componente2Component } from './Componente2/Componente2.component';
import { Componente3Component } from './Componente3/Componente3.component';

@NgModule({
  declarations: [			
    AppComponent,
      Componente1Component,
      Componente2Component,
      Componente3Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
