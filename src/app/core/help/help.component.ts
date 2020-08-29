import { Component, OnInit } from '@angular/core';
import {HelpResponse, HelpService} from '../services/help.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Guild, JDAService, User} from '../services/jda.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  response$:Observable<HelpResponse>;
  guild:Observable<Guild>;
  user:Observable<User>;
  constructor(private helpService:HelpService,private route:ActivatedRoute,private jdaService:JDAService) { }

  ngOnInit(): void {
    let token:string =this.route.snapshot.queryParamMap.get("token");
    if(token) {
     this.response$ = this.helpService.getCustomHelp(token);
     this.guild = this.jdaService.getGuild(token);
     this.user = this.jdaService.getUser(token);
    } else {
     this.response$ = this.helpService.getGenericHelp();
    }
  }

}
