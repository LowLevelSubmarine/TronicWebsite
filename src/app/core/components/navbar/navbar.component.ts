import { Component, OnInit } from '@angular/core';
import {Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getDays():number {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate:any = new Date(2019, 3, 10);
    const today:any = new Date();

    return  Math.round(Math.abs((today - firstDate) / oneDay));
  }

}
