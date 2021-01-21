import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { VehiclesComponent } from './vehicles.component';
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
      title: 'Vehicle'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehicles'
      },
      {
        path: 'vehicles',
        canActivate: [AuthGuard],
        component: VehiclesComponent,
        data: {
          title: 'Vehicles'
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
export class VehiclesRoutingModule { }


