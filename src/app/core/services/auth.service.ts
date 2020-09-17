import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {DiscordApiService} from './discord-api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private redirectSide;

    constructor(private router: Router, private discordApi: DiscordApiService) {
    }


    public async isUserAuthenticated(redirect?: string): Promise<boolean> {
        let apiSucces;
        let userid: string = window.localStorage.getItem("user");
        let token: string = window.localStorage.getItem("token");
        if (userid && token) {
            await this.discordApi.getUserInfo(token).toPromise().then((result) => {
                apiSucces = true;
            }).catch((err) => {
                if (err.status != 401) {
                    console.error(err)
                }
                this.redirect(redirect);
                apiSucces = false;
            })
            return apiSucces;

        } else {
            this.redirect(redirect);
            return false;
        }
    }

    private redirect(redirect?:string): void {
        if (redirect) {
            this.redirectSide = redirect;
        }
        this.router.navigateByUrl("login");
    }
}
