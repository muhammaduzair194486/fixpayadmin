import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';  
import { appInitializer } from '../_helpers/app.initializer';
import { JwtInterceptor,  } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';

import { ScootersService } from '../../services/scooters.service';
import { ScootersComponent } from './scooters.component';
import { ParkingZonesComponent } from './parking-zones/parking-zones.component';

//ThemeRouting
import { ScootersRoutingModule } from './scooter-routing.module';




@NgModule({
  imports: [
    CommonModule,
    ScootersRoutingModule
  ],
  declarations: [ScootersComponent,ParkingZonesComponent],
  bootstrap:    [ScootersComponent,ParkingZonesComponent],
  providers: [
    ScootersService,
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [ScootersService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
  ]
})
export class ScootersModule { }
