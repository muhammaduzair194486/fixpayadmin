import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Users } from '../../_models/users';
import { UserService } from '../../views/_services/user.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: Users[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}
