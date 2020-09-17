import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpComponent} from './core/components/help/help.component';
import {HomepageComponent} from './core/pages/homepage/homepage.component';
import {StatisticsComponent} from './core/components/statistics/statistics.component';
import {AuthGuard} from './core/guards/auth.guard';
import {LoginComponent} from './core/pages/login/login.component';


const routes: Routes = [
  {path:"help",component:HelpComponent},
  {path:"statistics",component:StatisticsComponent ,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"",component:HomepageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
