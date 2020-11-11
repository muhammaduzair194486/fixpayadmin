import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FileService {

  constructor(private _http: HttpClient) {}  

  getMerchantDetailsAndCashbackList(data: FormData){
    return this._http.post<any>(`${environment.apiUrl}/api/Merchant/changeStatus`, {data});
  }


}
