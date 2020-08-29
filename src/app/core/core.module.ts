import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule} from '@angular/common/http';
import {HelpComponent} from './help/help.component';


@NgModule({
  declarations: [HomepageComponent,HelpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [CommonModule]
})
export class CoreModule { }
