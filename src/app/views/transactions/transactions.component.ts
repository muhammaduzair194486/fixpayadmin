import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionListAFA,TransactionListWTWAFA } from '../../_models/transaction';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [MessageService]
})
export class TransactionsComponent implements OnInit {

  loading: boolean = true;

  @ViewChild('dt1') table: Table;

  lstTransactionListAFA:TransactionListAFA[];
  lstTransactionListWTBAFA:TransactionListAFA[];
  lstTransactionListWTWAFA:TransactionListWTWAFA[];

  error = '';
  _severity: string = '';
  _summary: string = '';
  _detail: string = '';

  constructor(
    private _transactionsService: TransactionsService,
    private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.getAllTransactionsFA();

  }



  getAllTransactionsFA(){

    this._transactionsService.getAllTransactionsFA().pipe(first()).subscribe({
      next: response => {
        console.log(response)
        this.lstTransactionListAFA = response.lstTransactionListAFA;
        this.lstTransactionListWTBAFA = response.lstTransactionListWTBAFA;
        this.lstTransactionListWTWAFA = response.lstTransactionListWTWAFA;

      },
      error: error => {
        this.MessageFun('Error', error, false);
      }

    });

  }
  



  //-------------message -------method-------start---------------
  MessageFun(status: string, message: string, result: boolean): void {

    if (result) {

      this._severity = 'success';
      this._summary = 'Success';
      this._detail = message;

    } else if (status == "Error") {

      this._severity = 'error';
      this._summary = 'Error';
      this._detail = message;

    } else {

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
