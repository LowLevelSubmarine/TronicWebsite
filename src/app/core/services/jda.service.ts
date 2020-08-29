import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HelpResponse} from './help.service';

export interface User {
  name:string,
  id:string,
  image:string
}

export interface Guild {
  guildName:string,
  guildId:string,
  members:string[],
  prefix:string,
  icon:string
}

@Injectable({
  providedIn: 'root'
})
export class JDAService {

  constructor(private http:HttpClient) { }

  public getUser(jwt:string): Observable<User>{
    let params: HttpParams = new HttpParams().set("token",jwt);
    return this.http.get<User>(environment.url+"user", {params:params});
  }

  public getGuild(jwt:string): Observable<Guild>{
    let params: HttpParams = new HttpParams().set("token",jwt);
    return this.http.get<Guild>(environment.url+"guild", {params:params});
  }
}
