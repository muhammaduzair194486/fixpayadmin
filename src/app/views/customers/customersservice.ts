import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerList } from '../../_models/customer';

@Injectable()
export class CustomersService {
    
    _url = 'https://localhost:44328/api/Customer';

    constructor(private _http:HttpClient){  }

        getAllCustomers() {
            return this._http.get<CustomerList[]>(this._url+'/GetAllCustomers');
        }

}