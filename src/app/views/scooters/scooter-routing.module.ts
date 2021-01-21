import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ScootersComponent } from './scooters.component';
import { ParkingZonesComponent } from './parking-zones/parking-zones.component';
import { AuthGuard } from '../_helpers/auth.guard'


//-----------------------------------------
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Scooter'
    },
    children: [
      {
        path: '',
        redirectTo: 'scooters'
      },
      {
        path: 'scooters',
        canActivate: [AuthGuard],
        component: ScootersComponent,
        data: {
          title: 'Scooters-Info'
        }
        
      },
      {
        path: 'parking-zones',
        canActivate: [AuthGuard],
        component: ParkingZonesComponent,
        data: {
          title: 'Parking-Zones'
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
export class ScootersRoutingModule { }
