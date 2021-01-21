import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _http: HttpClient) { }


  //---demo  service aoi call---start----
  //---demo  service aoi call---end----

  getCustomersLarge() {
    return this._http.get<any>('assets/customers-large.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
}

 //---demo  service aoi call---end----


}
