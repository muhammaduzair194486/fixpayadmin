import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { CashbackService } from '../../services/cashback.service';
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';

import { CashbackListAFA } from '../../_models/cashback';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css'],
  providers: [MessageService]
})
export class CashbackComponent implements OnInit {

  lstCashbackListAFA: CashbackListAFA[];

  @ViewChild('dt1') table: Table;


  error = '';
  _severity: string = '';
  _summary: string = '';
  _detail: string = '';

  constructor(
    private _cashbackService: CashbackService,
    private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllCashbackListFA();
  }


  getAllCashbackListFA() {

    this._cashbackService.getAllCashbackListFA().pipe(first()).subscribe({
      next: response => {
        console.log(response);
        this.lstCashbackListAFA = response;
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
