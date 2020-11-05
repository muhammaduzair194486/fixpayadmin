import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { Users } from '../../_models/users';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<Users>;  
    public currentUser: Observable<Users>;  

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
       this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));  
        this.currentUser = this.currentUserSubject.asObservable();  
    }

    public get currentUserValue(): Users {
        return this.currentUserSubject.value;
    }

    login(userName: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/Authenticate/authenticate`, { userName, password }, { withCredentials: true })
            .pipe(map(Users => {
                localStorage.setItem("token",Users.jwtToken);
                localStorage.setItem("currentUser", JSON.stringify(Users));
                this.currentUserSubject.next(Users);
                this.startRefreshTokenTimer();
                return Users;
            }));
    }
    

    logout() {
        this.http.post<any>(`${environment.apiUrl}/api/Authenticate/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/api/Authenticate/refresh-token`, {}, { withCredentials: true })
            .pipe(map((user) => {
                localStorage.setItem("currentUser", JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            }));
    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.currentUserValue.jwtToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}
