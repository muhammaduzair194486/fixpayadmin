import { Component,ViewChild, OnInit } from '@angular/core';

import { CustomersService } from './customersservice';
import { CustomerList } from '../../_models/customer';

import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customerList: CustomerList[];

  statuses: any[];
  loading: boolean = true;
  @ViewChild('dt') table: Table;
  activityValues: number[] = [0, 100];

  constructor(private _customersService:CustomersService ) { }

  ngOnInit(): void {

    this._customersService.getAllCustomers().subscribe(customerList => {
      this.customerList = customerList;
      console.log("this.customerList");
      console.log(this.customerList);
      this.loading = false;
    });

  }

}
