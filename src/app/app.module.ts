import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import {MatButtonModule, MatMenuModule, MatMenuItem} from '@angular/material';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { MenuComponent } from './components/menu/menu.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ClassesComponent,
    MenuComponent,
    GettingStartedComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
