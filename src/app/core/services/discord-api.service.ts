import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface DiscordUser {
  id: string,
  username: string,
  discriminator: string,
  avatar?: string
}

@Injectable({
  providedIn: 'root'
})
export class DiscordApiService {

  constructor(private http: HttpClient) {}

  getUserInfo(token: string): Observable<DiscordUser> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    })
    return this.http.get<DiscordUser>("https://discord.com/api/users/@me",{headers: headers});
  }


}
