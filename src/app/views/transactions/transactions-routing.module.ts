import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from './transactions.component';
import { AuthGuard } from '../_helpers/auth.guard';

//-----------------------------------------
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transactions'
    },
    children: [
      {
        path: '',
        redirectTo: 'transactions'
      },
      {
        path: 'transactions',
        canActivate: [AuthGuard],
        component: TransactionsComponent,
        data: {
          title: 'Transactions'
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
export class TransactionsRoutingModule { }




