import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

import { ButtonModule } from 'primeng/button';
import { LayoutPrincipalComponent } from './layout/layout-principal.component';
import { SidebarModule } from 'primeng/sidebar';
import { SlidebarComponent } from './layout/slidebar/slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LayoutPrincipalComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
