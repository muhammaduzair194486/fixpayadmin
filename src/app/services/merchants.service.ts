import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { MerchantList } from '../_models/merchants';
import { Observable } from 'rxjs';

@Injectable()
export class MerchantsService {

    constructor(private _http: HttpClient) { }

    getAllMerchants()  {
        return this._http.get<MerchantList[]>(`${environment.apiUrl}/api/Merchant/getAllMerchant`);
    }


    statusChange(id:string, active: boolean) {
        return this._http.post<any>(`${environment.apiUrl}/api/Merchant/changeStatus`, {id, active});
    }


    merchantDetails(id:string) {
        return this._http.get<any>(`${environment.apiUrl}/api/Merchant/merchantDetails`, { params: {id:id}});
    }


        //----------------------------------------------------
        // getAllMerchants() {
        //     let header = new HttpHeaders().set(
        //       "Authorization",
        //        localStorage.getItem("token")
        //     );
        
        //     return this._http.get<MerchantList[]>(`${environment.apiUrl}/api/Merchant/getAllMerchant`, {headers:header});
        //   }
        
        //----------------------------------------------------

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }


}