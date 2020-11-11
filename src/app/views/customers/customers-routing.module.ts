import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component'
import { AuthGuard } from '../_helpers/auth.guard'

// const routes: Routes = [
//   {
//     path : '',
//     canActivate: [AuthGuard],
//     data : {
//       title : 'Customers',
//     },
//     children:[
//       {
//         path: '',
//         redirectTo: 'customers',
//       },
//       {
//         path: 'customers',
//         component:CustomersComponent,
//         data:{
//           title:'Customers'
//         }
//       }
//     ]
//   }
// ];

//-----------------------------------------
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customer'
    },
    children: [
      {
        path: '',
        redirectTo: 'customers'
      },
      {
        path: 'customers',
        canActivate: [AuthGuard],
        component: CustomersComponent,
        data: {
          title: 'Customers'
        }
      },
     
      
    ]
  },
  {path: 'customer-details', canActivate: [AuthGuard], component : CustomerDetailsComponent }
];

//------------------------------




@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
