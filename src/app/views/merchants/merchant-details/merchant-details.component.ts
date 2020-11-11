import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MenuItem} from 'primeng/api';

import { MerchantsService } from '../../../services/merchants.service';
import { MerchantList, CashbackDTModel } from '../../../_models/merchants';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss']
})
export class MerchantDetailsComponent implements OnInit {

  merchantList:MerchantList;
  cashbackDTModel:CashbackDTModel[];
  MerchantId:string = ''; 

  loading: boolean = true;

  constructor(
    private _merchantService: MerchantsService,
    private _activatedRoute: ActivatedRoute
  ) {
      this._activatedRoute.queryParams.subscribe(data => {
        this.MerchantId = data.MerchantId;
      });
   }

  ngOnInit(): void {

    this._merchantService.getMerchantDetailsAndCashbackList(this.MerchantId).pipe(first()).subscribe({
      next: response => {
        console.log(response);     
        this.loading = false;
        this.merchantList = response.merchantList;
        this.cashbackDTModel = response.lstCashbackDTModel;
      },
      error: error => {
          console.log(error);
      }
    });

  }



}
