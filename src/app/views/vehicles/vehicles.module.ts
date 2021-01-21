// Angular
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VehiclesComponent } from '../vehicles/vehicles.component';
import { VehiclesService } from '../../services/vehicles.service';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';  
import { appInitializer } from '../_helpers/app.initializer';
import { JwtInterceptor,  } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';

import { TabViewModule } from 'primeng/tabview';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
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
import {MessagesModule} from 'primeng/messages';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputMaskModule} from 'primeng/inputmask';


//ThemeRouting
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
    imports: [
          CommonModule,
          VehiclesRoutingModule,
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
          MessagesModule,
          InputSwitchModule,
          MessageModule,
          TabMenuModule,
          TabViewModule,
          InputMaskModule,
          FormsModule
    ],
    declarations: [ VehiclesComponent ],
    bootstrap:    [ VehiclesComponent ],
    providers: [
        VehiclesService,
      { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [VehiclesService] },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    ]
  })


  export class VehiclesModule{ }


  




