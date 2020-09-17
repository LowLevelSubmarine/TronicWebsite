import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {HelpResponse, HelpService} from '../../services/help.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EMPTY, Observable, throwError} from 'rxjs';
import {Guild, JDAService, User} from '../../services/jda.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {BotService} from '../../services/bot.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  response$:Observable<HelpResponse>;
  guild:Observable<Guild>;
  user:Observable<User>;
  errorMessage ="";
  prefix="";
  constructor(private helpService:HelpService,private route:ActivatedRoute,private jdaService:JDAService,private changeDetector:ChangeDetectorRef,private botService:BotService) { }

  ngOnInit(): void {
    let token:string =this.route.snapshot.queryParamMap.get("token");
    if(token) {
     this.response$ = this.helpService.getCustomHelp(token).pipe(
         catchError(err => {
             this.handleError(err);
             this.changeDetector.detectChanges();
             this.response$ = this.helpService.getGenericHelp();
             return EMPTY;
         })
     );
     this.guild = this.jdaService.getGuild(token).pipe(
         catchError(err => {
             this.handleError(err);
             this.changeDetector.detectChanges();
             return EMPTY;
         })
     );
     this.user = this.jdaService.getUser(token).pipe(
         catchError(err => {
             this.handleError(err);
             this.changeDetector.detectChanges();
             return EMPTY;
         })
     );
    } else {
         this.response$ = this.helpService.getGenericHelp().pipe(
             catchError(err => {
                 this.handleError(err);
                 this.changeDetector.detectChanges();
                 return EMPTY;
             })
        );
        this.changeDetector.detectChanges();
    }
    this.botService.getBotData().pipe(
        catchError(() => {return EMPTY})
    ).subscribe(next=>{
        this.prefix = next.defaultPrefix
    });
  }

  public getPrefix(guild:Guild) {
      return (guild!=null&& guild.prefix!=null)? guild.prefix:this.prefix;
  }

  private handleError(error:HttpErrorResponse) {
      if (error.status == 0) {
          this.errorMessage = " Can not connect to TronicBot! Please check your internet connection!";
      } else {
          this.errorMessage = error.status+" "+error.statusText;
      }
  }
}
