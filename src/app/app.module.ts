import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PanelFotosComponent } from './panel-fotos/panel-fotos.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelFotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
