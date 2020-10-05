import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule} from '@angular/common/http';
import {HelpComponent} from './components/help/help.component';
import { TitleComponent } from './components/title/title.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { HelpItemComponent } from './components/help-item/help-item.component';
import { ErrorComponent } from './pages/error/error.component';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { InviteComponent } from './pages/invite/invite.component';
import {ClarityModule} from '@clr/angular';


@NgModule({
  declarations: [HomepageComponent,HelpComponent, TitleComponent, StatisticsComponent, LoginComponent, NavbarComponent, HelpItemComponent, ErrorComponent, InviteComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        NgScrollbarModule,
        ClarityModule,
    ],
    exports: [CommonModule, NavbarComponent]
})
export class CoreModule { }
