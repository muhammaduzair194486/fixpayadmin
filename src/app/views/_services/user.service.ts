import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../environments/environment';
import { Users } from '../../_models/users';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Users[]>(`${environment.apiUrl}/users`);
    }
}