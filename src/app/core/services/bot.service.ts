import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


export interface Bot {
  version:string,
  defaultPrefix:string
}

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private http:HttpClient) { }
  public getBotData() {
    return this.http.get<Bot>(environment.url+"bot");
  }
}
