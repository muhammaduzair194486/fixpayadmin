import { Component, OnInit,ViewChild } from '@angular/core';
import { Message, MessageService } from "primeng/api";
import { from, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MenuItem} from 'primeng/api';
import { Table } from 'primeng/table';

import { CustomersService } from '../../../services/customers.service';
import { CashbackListFA, CustomerDetailsFA, FriendListModelFA, TransactionListFA } from '../../../_models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [MessageService]
})
export class CustomerDetailsComponent implements OnInit {

  customerDetailsFA:CustomerDetailsFA;
  lstCashbackListFA:CashbackListFA[];
  selectedCashbacks: CashbackListFA[];
  lstFriendListModelFA:FriendListModelFA[];
  lstTransactionListFA:TransactionListFA[];

  CustomerId:string = '';
  loading: boolean = true;
  @ViewChild('dt1') table1: Table;
  @ViewChild('dt2') table2: Table;
  @ViewChild('dt3') table3: Table;

  msgs:string;


  constructor(
    private _customersService: CustomersService,
    private messageService: MessageService,
    private _activatedRoute: ActivatedRoute
    ) { 
      
      this._activatedRoute.queryParams.subscribe(data =>{
        this.CustomerId = data.CustomerId;
      });

    }

  ngOnInit(): void {
    this.getCustomerCashbackTransactionFriendDetails();

  }


  getCustomerCashbackTransactionFriendDetails(){
  
    this._customersService.getCustomerCashbackTransactionFriendDetails(this.CustomerId).
    pipe(first()).subscribe({
      next: response => {

        console.log(response);     
        this.loading = false;
        this.customerDetailsFA = response.customerDetailsFA;
        this.lstCashbackListFA = response.lstCashbackListFA;
        this.lstFriendListModelFA = response.lstFriendListModelFA;
        this.lstTransactionListFA = response.lstTransactionListFA;
   
      },
      error: error => {
          console.log(error);
      }
    });
  
  }

  





}
