import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserManualPageComponent } from './user-manual-page/user-manual-page.component';
import { CreateNonwordsetPageComponent } from './create-nonwordset-page/create-nonwordset-page.component';
import { AboutSmlPageComponent } from './about-sml-page/about-sml-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'user-manual', component: UserManualPageComponent },
  { path: 'create-nonword-set', component: CreateNonwordsetPageComponent },
  { path: 'about-sml', component: AboutSmlPageComponent },
  { path: 'home', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
