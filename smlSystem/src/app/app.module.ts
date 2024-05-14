import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ToolbarComponent,
    HomepageComponent,
    AboutUsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }