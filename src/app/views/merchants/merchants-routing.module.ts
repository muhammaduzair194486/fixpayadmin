import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantsComponent } from './merchants.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Merchant'
    },
    children: [
      {
        path: '',
        redirectTo: 'merchants'
      },
      {
        path: 'merchants',
        canActivate: [AuthGuard],
        component: MerchantsComponent,
        data: {
          title: 'Merchants'
        }
      },
      {
        path: 'add-merchants',
        canActivate: [AuthGuard],
        component: AddMerchantComponent,
        data: {
          title: 'Add Merchants'
        }
      },
      
    ]
  },
  {path: 'merchant-details', canActivate: [AuthGuard], component : MerchantDetailsComponent }
];

//------------------------------

 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantsRoutingModule {}


