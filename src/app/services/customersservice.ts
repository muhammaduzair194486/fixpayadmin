import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { CustomerList } from '../_models/customer';

@Injectable()
export class CustomersService {
    
    _url = 'https://localhost:44328/api/Customer';

    constructor(private _http:HttpClient){  }

        getAllCustomers() {
            return this._http.get<CustomerList[]>(`${environment.apiUrl}/api/Customer/GetAllCustomersFA`);
        }


        statusChange(id: string, active: boolean) {
            return this._http.post<any>(`${environment.apiUrl}/api/Customer/changeStatus`, { id, active });
        }


        getCustomerCashbackTransactionFriendDetails(id: string) {
            return this._http.get<any>(`${environment.apiUrl}/api/Customer/getCustomerCashbackTransactionFriendDetails/${id}`);
        }


}