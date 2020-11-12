import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CashbackListAFA } from '../_models/cashback';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {


  constructor(
    private _http:HttpClient
  ) { }


  getAllTransactionsFA(){
    return this._http.get<any[]>(`${environment.apiUrl}/api/CashbackTransactions/getAllTransactionsFA`);
  }


}
