import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CashbackListAFA } from '../_models/cashback';



@Injectable({
  providedIn: 'root'
})
export class CashbackService {


  constructor(
    private _http:HttpClient
  ) { }


  getAllCashbackListFA(){
    return this._http.get<CashbackListAFA[]>(`${environment.apiUrl}/api/Cashback/getAllCashbackListFA`);
  }

}
