import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoneComponent } from './zone/zone.component';
import { ClientComponent } from './client/client.component';
import { CompteComponent } from './compte/compte.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneComponent,
    ClientComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
