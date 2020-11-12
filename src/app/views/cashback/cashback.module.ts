// Angular
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CashbackComponent } from '../cashback/cashback.component';
import { CashbackService } from '../../services/cashback.service';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';  
import { appInitializer } from '../_helpers/app.initializer';
import { JwtInterceptor,  } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';

import { TabViewModule } from 'primeng/tabview';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {InputSwitchModule} from 'primeng/inputswitch';
//ThemeRouting
import { CashbackRoutingModule } from './cashback-routing.module';

@NgModule({
    imports: [
          CommonModule,
          CashbackRoutingModule,
        // BrowserModule,
        // BrowserAnimationsModule,
          TableModule,
          DialogModule,
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
          FormsModule
    ],
    declarations: [ CashbackComponent ],
    bootstrap:    [ CashbackComponent ],
    providers: [
        CashbackService,
      { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [CashbackService] },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    ]
  })


  export class CashbackModule{ }

