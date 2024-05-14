import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserManualPageComponent } from './user-manual-page/user-manual-page.component';
import { CreateNonwordsetPageComponent } from './create-nonwordset-page/create-nonwordset-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'user-manual', component: UserManualPageComponent },
  { path: 'create-nonword-set', component: CreateNonwordsetPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
