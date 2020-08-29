import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export interface HelpResponse {
  settings: Command[],
  music:Command[],
  administration:Command[],
  fun:Command[],
  info:Command[]
}

export interface Command {
  title:string,
  description:string,
  syntax:string

}

@Injectable({
  providedIn: 'root'
})

export class HelpService {

  constructor(private http: HttpClient) {
  }

  public getGenericHelp(): Observable<HelpResponse> {
    return this.http.get<HelpResponse>(environment.url + "help");
  }

  public getCustomHelp(jwtToken: string): Observable<HelpResponse> {
    let params: HttpParams = new HttpParams().set("token", jwtToken);
    return this.http.get<HelpResponse>(environment.url + "help", {params: params});
  }
}
