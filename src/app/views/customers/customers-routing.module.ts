import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { AuthGuard } from '../_helpers/auth.guard'

const routes: Routes = [
  {
    path : '',
    canActivate: [AuthGuard],
    data : {
      title : 'Customers',
    },
    children:[
      {
        path: '',
        redirectTo: 'customers',
      },
      {
        path: 'customers',
        component:CustomersComponent,
        data:{
          title:'Customers'
        }
      }
    ]
  }
];




@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
