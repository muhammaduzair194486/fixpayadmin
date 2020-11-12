import { Component, ViewChild, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { CustomerList } from '../../_models/customer';
import { Table } from 'primeng/table';
import { Message, MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [MessageService]
})
export class CustomersComponent implements OnInit {

  customerList: CustomerList[];

  msgs: Message[];

  statuses: any[];
  loading: boolean = true;
  @ViewChild('dt') table: Table;
  activityValues: number[] = [0, 100];

  _severity: string = '';
  _summary: string = '';
  _detail: string = '';

  constructor(
    private _customersService: CustomersService,
    private _messageService: MessageService
  ) { }

  ngOnInit(): void {


    this._customersService.getAllCustomers().pipe(first()).subscribe({
      next: response => {

        console.log(response);
        this.customerList = response;
        console.log(this.customerList);
        this.loading = false;

      },
      error: error => {
        console.log(error);
      }

    });

  }



  //------------------------statusChange start-------------------
  statusChange(id: string, status: boolean): void {
    this._customersService.statusChange(id, status).pipe(first()).subscribe({
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
