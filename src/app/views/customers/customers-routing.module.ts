import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component'
import { AuthGuard } from '../_helpers/auth.guard'
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDocumentsComponent } from './customer-documents/customer-documents.component';
import { CustomerWalletComponent } from './customer-wallet/customer-wallet.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

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
      {
        path: 'customer-profile',
        canActivate: [AuthGuard],
        component: CustomerProfileComponent,
        data: {
          title: 'Info/Profile'
        }
      },
      {
        path: 'customer-documents',
        canActivate: [AuthGuard],
        component: CustomerDocumentsComponent,
        data: {
          title: 'Documents'
        }
      },
      {
        path: 'customer-wallet',
        canActivate: [AuthGuard],
        component: CustomerWalletComponent,
        data: {
          title: 'Wallet'
        }
      },
      {
        path: 'customer-card',
        canActivate: [AuthGuard],
        component: CustomerCardComponent,
        data: {
          title: 'Card'
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
