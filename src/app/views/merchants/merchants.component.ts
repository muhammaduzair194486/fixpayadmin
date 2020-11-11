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
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss'],
  providers: [MessageService]
})
export class MerchantsComponent implements OnInit {

  merchantList: MerchantList[];
  // merchantList: Observable<MerchantList[]>;  

  statuses: any[];
  loading: boolean = true;
  @ViewChild('dt') table: Table;

  error = '';
   _severity:string = '';
  _summary:string = '';
  _detail:string = '';


  constructor(private _merchantsService: MerchantsService, private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    //   this._merchantsService.getAllMerchants().subscribe(merchantList => {
    //   this.merchantList = merchantList;
    //   this.loading = false;

    // });

    this._merchantsService.getAllMerchants().pipe(first()).subscribe({
      next: response => {

        console.log(response);
        this.merchantList = response;
        console.log(this.merchantList);
        this.loading = false;

      },
      error: error => {
        console.log(error);
      }

    });

  }

  //------------------------statusChange start-------------------
  statusChange(id: string, status: boolean): void {
    this._merchantsService.statusChange(id, status).pipe(first()).subscribe({
      next: response => {
        console.log(response);
        this.MessageFun(response.status, response.message, response.result);
      },
      error: error => {
        this.MessageFun('Error', error, false);
      }
    });
  }
  //------------------------statusChange end-------------------

  //------------------------merchantDetails start--------------
  merchantDetails(merchantId: string): void {
    alert(merchantId);
    this._merchantsService.merchantDetails(merchantId).pipe(first()).subscribe({
      next: response => {
        console.log(response);
        this.MessageFun(response.status, response.message, response.result);
      },
      error: error => {
        this.MessageFun('Error', error, false);
      }
    });
  }
  //------------------------merchantDetails stat--------------







  //-------------message -------method-------start---------------
  MessageFun(status: string, message: string, result:boolean): void {

    if(result){

      this._severity = 'success';
      this._summary = 'Success';
      this._detail = message;

    }else if(status == "Error"){

      this._severity = 'error';
      this._summary = 'Error';
      this._detail = message;

    }else{

      this._severity = 'error';
      this._summary = 'Failed';
      this._detail = message;

    }

    this._messageService.add({
      severity: this._severity,
      summary: this._summary,
      detail: this._detail
    });

  }
  //-------------message -------method-------end--------------- 


}
