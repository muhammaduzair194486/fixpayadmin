import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from '../../views/_services/authentication.service';
import { Users } from '../../_models/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  _user : Users;

  constructor(private _authenticationService:AuthenticationService){
    this._authenticationService.currentUser.subscribe(x => this._user = x);
  }

  logout(){
    this._authenticationService.logout();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
