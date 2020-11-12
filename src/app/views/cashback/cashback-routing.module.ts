import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CashbackComponent } from './cashback.component';
import { AuthGuard } from '../_helpers/auth.guard';

//-----------------------------------------
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cashback'
    },
    children: [
      {
        path: '',
        redirectTo: 'cashbacks'
      },
      {
        path: 'cashbacks',
        canActivate: [AuthGuard],
        component: CashbackComponent,
        data: {
          title: 'Cashbacks'
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
export class CashbackRoutingModule { }
