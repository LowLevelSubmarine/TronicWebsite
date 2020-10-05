import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    onButtonClick() {
        window.open(environment.invitelink,"Discord Login","width:600px, height:800px");
    }
}
