// Angular
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomersComponent } from '../customers/customers.component';
import { CustomersService } from '../customers/customersservice';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';  
import { appInitializer } from '../_helpers/app.initializer';
import { JwtInterceptor,  } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';

//ThemeRouting
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    imports: [
          CommonModule,
          CustomersRoutingModule,
        // BrowserModule,
        // BrowserAnimationsModule,
          TableModule,
          CalendarModule,
          SliderModule,
          DialogModule,
          MultiSelectModule,
          ContextMenuModule,
          DropdownModule,
          ButtonModule,
          ToastModule,
          InputTextModule,
          ProgressBarModule,
          HttpClientModule,
          FormsModule
    ],
    declarations: [ CustomersComponent ],
    bootstrap:    [ CustomersComponent ],
    providers: [
      CustomersService,
      { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [CustomersService] },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    ]
  })


  export class CustomersModule{ }

