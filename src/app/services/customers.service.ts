import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { AdminCustomerListDAO } from '../_models/customer';


export class TableCell {
    constructor(public index: number,
      public data: string) { }
  }

export class TableData {
    constructor(
      public headers: TableCell[],
      public data: TableCell[][]
    ) { }
  }



@Injectable()
export class CustomersService {
    
    _url = 'https://localhost:44328/api/Customer';

    constructor(private _http:HttpClient){  }

        getAllCustomers() {
            return this._http.get<AdminCustomerListDAO[]>(`${environment.apiUrl}/api/AdminCustomers/getAllCustomers`);
        }


        statusChange(id: string, active: boolean) {
            return this._http.post<any>(`${environment.apiUrl}/api/Customer/changeStatus`, { id, active });
        }


        getCustomerCashbackTransactionFriendDetails(id: string) {
            return this._http.get<any>(`${environment.apiUrl}/api/Customer/getCustomerCashbackTransactionFriendDetails/${id}`);
        }


        //---------------filter-------------------server side to get all customers start---
        // getDriverFilteredRecords(driverDetails: AdminCustomerListDAO, pageIndex: number, pageSize: number, sortColumn: string, sortOrder: number) {
    
        //     const HttpOptions = {
        //       headers: new HttpHeaders({ "Accept": "application/json" }),
        //     }
        //     return this._http.post<Driverdto>(this.url + '/v1/GetDriverFilteredRecords/', driverDetails, { params: { pageIndex: pageIndex.toString(), pageSize: pageSize.toString(), sortColumn: sortColumn, sortOrder: sortOrder.toString() } })
        //   }
        // //---------------filter-------------------server side to get all customers end---

        getCustomrsFilteredRecords(customerDetails: AdminCustomerListDAO, pageIndex: number, pageSize: number, sortColumn: string, sortOrder: number) {
            return this._http
            .get<AdminCustomerListDAO[]>(`${environment.apiUrl}/api/AdminCustomers/getAllCustomersParams?pageSize=${pageSize}&PageNumber=${pageIndex}
            &full_name=${customerDetails.full_Name}&email=${customerDetails.email}&phone=${customerDetails.phone}
            &created_at=${customerDetails.created_at}`);
        }

        getAllCustomersFirst(pageIndex: number, pageSize: number) {
            return this._http
            .get<AdminCustomerListDAO[]>(`${environment.apiUrl}/api/AdminCustomers/getAllCustomersFirst?pageSize=${pageSize}&PageNumber=${pageIndex}`);
        }



        //---------------------------------------------------------------

        export(data: string, mimeTypeAndCharset: string, filename: string) {
            let blob = new Blob([data], {
              type: mimeTypeAndCharset
            });
        
            if (window.navigator.msSaveOrOpenBlob) {
              navigator.msSaveOrOpenBlob(blob, filename);
            }
            else {
              let link = document.createElement("a");
              link.style.display = 'none';
              document.body.appendChild(link);
              if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', filename);
                link.click();
              }
              else {
                data = mimeTypeAndCharset + ',' + data;
                window.open(encodeURI(data));
              }
              document.body.removeChild(link);
            }
          }



        private readRowCells(cells: HTMLCollectionOf<HTMLTableCellElement | HTMLTableHeaderCellElement>): TableCell[] {
            let rowData = [];
            for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
              let cell = cells.item(cellIndex);
              let exportable = cell.attributes.getNamedItem("exportable");
        
              if (!exportable || (exportable && exportable.value !== "false")) {
                let text = "";
                let exportValue = cell.attributes.getNamedItem("exportValue");
                if (exportValue) {
                  text = exportValue.value;
                } else {
                  text = cell.innerText;
                }
                if (text !== "") {
                  rowData.push({ index: cellIndex, data: text.trim() });
                }
              }
            }
        
            return rowData;
          }



        private readTable(table: HTMLTableElement): TableData {
            let headers = this.readRowCells(table.rows.item(0).cells).filter(c => {
              return c.data !== "";
            });
        
        
            let dataRows = [];
            for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
              let rowData = this.readRowCells(table.rows.item(rowIndex).cells).filter(c => {
                return headers.findIndex(h => {
                  return h.index === c.index;
                }) !== -1
              });
        
              dataRows.push(rowData);
            }
        
            return new TableData(headers, dataRows);
          }
  
        private csvTryQuote(data: string) {
            if (data.includes(',')) {
              return '"' + data.replace(/"/g, '""') + '"';
            }
        
            return data.replace(/"/g, '""');
          }


          private toCsv(data: TableData) {
            let csv = '\ufeff';
            let csvSeparator = ',';
        
            data.headers.forEach((cell, i) => {
              csv += this.csvTryQuote(cell.data);
        
              if (i < (data.headers.length - 1)) {
                csv += csvSeparator;
              }
        
            });
        
            data.data.forEach((row, j) => {
              csv += '\n';
        
              row.forEach((cell, i) => {
                csv += this.csvTryQuote(cell.data);
        
                if (i < (row.length - 1)) {
                  csv += csvSeparator;
                }
              });
            });
        
            return csv;
          }


        exportCsv(table: HTMLTableElement, filename: string) {
            let csv = this.toCsv(this.readTable(table));
            this.export(csv, 'text/csv;charset=utf-8;', filename);
          }


          //-------------get record by date range start------------
          getCustomerRecordByDateRange(pageIndex: number, pageSize: number, startDate: string, endDate: string) {
            return this._http
            .get<AdminCustomerListDAO[]>(`${environment.apiUrl}/api/AdminCustomers/getCustomerRecordByDateRange?pageSize=${pageSize}
            &PageNumber=${pageIndex}&startDate=${startDate}&endDate=${endDate}`);
        }
          //-------------get record by date range end------------

        //   exportDriversFilteredRecords(customerListDTO: AdminCustomerListDAO): Observable<AdminCustomerListDAO> {
        //     return this._http.post<AdminCustomerListDAO>(this._url + '/v1/ExportDriversFilteredRecords/', customerListDTO)
        //   }


}