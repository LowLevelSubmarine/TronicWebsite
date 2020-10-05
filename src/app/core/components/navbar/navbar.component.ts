import { Component, OnInit } from '@angular/core';
import {Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

  getDays():number {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate:any = new Date(2019, 3, 10);
    const today:any = new Date();

    return  Math.round(Math.abs((today - firstDate) / oneDay));
  }

  getSite(): string {
    let index = this.router.url.indexOf("?")
    return index == -1? this.router.url: this.router.url.substr(0,index)
  }

}
