import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';  
import { appInitializer } from '../_helpers/app.initializer';
import { JwtInterceptor,  } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';

import { RidesService } from '../../services/rides.service';
import { RidesComponent } from './rides.component';

//ThemeRouting
import { RidesRoutingModule } from './rides-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RidesRoutingModule
  ],
  declarations: [RidesComponent],
  bootstrap:    [RidesComponent],
  providers: [
    RidesService,
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [RidesService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
  ]

})
export class RidesModule { }
