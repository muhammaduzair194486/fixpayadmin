// Angular
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MerchantsComponent } from './merchants.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { MerchantsService } from '../../services/merchants.service';


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
import {InputSwitchModule} from 'primeng/inputswitch';
import {MessagesModule} from 'primeng/messages';

// Theme Routing
import { MerchantsRoutingModule } from './merchants-routing.module';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';  
import { appInitializer } from '../_helpers/app.initializer';
import { JwtInterceptor,  } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';


@NgModule({
  imports: [
    CommonModule,
    MerchantsRoutingModule,
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
    InputSwitchModule,
    MessagesModule,
    FormsModule
  ],
  declarations: [ MerchantsComponent, AddMerchantComponent ],
  bootstrap:    [ MerchantsComponent, AddMerchantComponent],
  providers: [
    MerchantsService,
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [MerchantsService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
  ]

})



export class MerchantsModule { }
