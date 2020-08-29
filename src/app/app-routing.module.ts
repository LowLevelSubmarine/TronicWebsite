import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpComponent} from './core/help/help.component';
import {HomepageComponent} from './core/pages/homepage/homepage.component';


const routes: Routes = [
  {path:"help",component:HelpComponent},
  {path:"",component:HomepageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
