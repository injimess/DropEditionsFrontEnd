import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthformComponent } from './authform/authform.component';
import { HomeComponent } from './home/home.component';
import { PsoneComponent } from './psone/psone.component';
import { PsthreeComponent } from './psthree/psthree.component';
import { PstwoComponent } from './pstwo/pstwo.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent},
  { path: 'psone', component : PsoneComponent},
  { path: 'pstwo', component : PstwoComponent},
  { path: 'psthree', component : PsthreeComponent},
  { path: 'authform', component : AuthformComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
