import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { UserManualPageComponent } from './user-manual-page/user-manual-page.component';
import { CreateNonwordsetPageComponent } from './create-nonwordset-page/create-nonwordset-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSmlPageComponent } from './about-sml-page/about-sml-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { NonwordSetToolbarComponent } from './nonword-set-toolbar/nonword-set-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ToolbarComponent,
    HomepageComponent,
    AboutUsPageComponent,
    UserManualPageComponent,
    CreateNonwordsetPageComponent,
    FooterComponent,
    AboutSmlPageComponent,
    LoginPageComponent,
    CreateAccountPageComponent,
    ContactUsPageComponent,
    NonwordSetToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
