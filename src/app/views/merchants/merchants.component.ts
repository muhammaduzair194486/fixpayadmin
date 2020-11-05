import { Component, ViewChild, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MerchantList } from '../../_models/merchants';
// import { Representative } from './merchants';
import { MerchantsService } from '../../services/merchants.service';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { Message, MessageService } from "primeng/api";
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css'],
  providers: [MessageService]
})
export class MerchantsComponent implements OnInit {

  merchantList: MerchantList[];
  // merchantList: Observable<MerchantList[]>;  

  statuses: any[];
  loading: boolean = true;
  @ViewChild('dt') table: Table;

  error = '';

  msgs: Message[];


  constructor(private _merchantsService: MerchantsService, private messageService: MessageService,) { }


  ngOnInit(): void {

    //   this._merchantsService.getAllMerchants().subscribe(merchantList => {
    //   this.merchantList = merchantList;
    //   this.loading = false;

    // });

    this._merchantsService.getAllMerchants().pipe(first()).subscribe(merchantList => {
      this.merchantList = merchantList;
      console.log(this.merchantList);
      this.loading = false;

    });

  }

  //------------------------statusChange start-------------------
  statusChange(id: string, status: boolean): void {
    this._merchantsService.statusChange(id, status).pipe(first()).subscribe({
      next: response => {
        console.log(response);
        this.MessageFun(response.status, response.message);
      },
      error: error => {
        this.MessageFun("error", error);
      }
    });
  }
  //------------------------statusChange end-------------------

  //------------------------merchantDetails stat--------------
  merchantDetails(merchantId: string): void {
    alert(merchantId);
    this._merchantsService.merchantDetails(merchantId).pipe(first()).subscribe({
      next: response => {
        console.log(response);
        this.MessageFun(response.status, response.message);
      },
      error: error => {
        this.MessageFun("error", error);
      }
    });
  }
  //------------------------merchantDetails stat--------------







  //-------------message -------method-------start---------------
  MessageFun(status: string, message: string): void {

    this.msgs = [
      {
        severity: status.toLowerCase(),
        summary: status,
        detail: message
      }
    ]

  }
  //-------------message -------method-------end--------------- 
}
