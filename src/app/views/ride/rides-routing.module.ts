import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RidesComponent } from './rides.component';
import { AuthGuard } from '../_helpers/auth.guard'


//-----------------------------------------
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ride'
    },
    children: [
      {
        path: '',
        redirectTo: 'rides'
      },
      {
        path: 'rides',
        canActivate: [AuthGuard],
        component: RidesComponent,
        data: {
          title: 'Rides'
        }
      },

     
      
    ]
  },
//   {path: 'customer-details', canActivate: [AuthGuard], component : CustomerDetailsComponent }
];

//------------------------------


@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidesRoutingModule { }
