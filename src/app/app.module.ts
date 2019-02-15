import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoneComponent } from './zone/zone.component';
import { ClientComponent } from './client/client.component';
import { CompteComponent } from './compte/compte.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientService} from './client/client.service';
import { ClientMockService } from './client/client.mock.service';
import { Client } from './shared/client';

@NgModule({
  declarations: [
    AppComponent,
    ZoneComponent,
    ClientComponent,
    CompteComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClientService,
    ClientMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
