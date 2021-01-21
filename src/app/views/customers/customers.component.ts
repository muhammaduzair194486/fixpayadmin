import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { AdminCustomerListDAO } from '../../_models/customer';
import { Table } from 'primeng/table';
import { LazyLoadEvent, Message, MessageService, SelectItem } from 'primeng/api';
import { first } from 'rxjs/operators';
// import { LazyLoadEvent, SelectItem } from 'primeng/components/common/api'
import { map } from 'rxjs/operators';
import { PrimeNGConfig } from 'primeng/api';
import { DatePipe } from '@angular/common';

// import jspdf from 'jspdf';
// import autoTable from 'jspdf-autotable';



export interface ExportCustomer { 
  full_Name: string;
  email: string;
  phone: string;
  created_at: Date;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [MessageService,DatePipe]
})
export class CustomersComponent implements OnInit {

  adminCustomerListDAO: AdminCustomerListDAO[];
  adminCustomerModel: AdminCustomerListDAO;

  msgs: Message[];

  statuses: any[];
  loading: boolean = true;
  // @ViewChild('dt') table: Table;
  @ViewChild('dt', { static: false }) resultTable: Table;
  activityValues: number[] = [0, 100];

  _severity: string = '';
  _summary: string = '';
  _detail: string = '';

  totalRecords: number;
  pageSize: number = 10;
  cols: any[];
  exportColumns: any[];

  selectedCustomers: AdminCustomerListDAO[];
  exportLst: ExportCustomer[];
  exportName = "customersDetails";

  rangeDates: Date[];

  displayBasic: boolean;

  constructor(
    private _customersService: CustomersService,
    private _messageService: MessageService,
    private _primengConfig: PrimeNGConfig,
    public _datepipe: DatePipe
  ) { 


  }

  ngOnInit(): void {

    this._primengConfig.ripple = true;
    this.loadAllCustomers();


    // this._customersService.getAllCustomers().pipe(first()).subscribe({
    //   next: response => {

    //     console.log(response);
    //     this.adminCustomerListDAO = response;
    //     console.log(this.adminCustomerListDAO);
    //     this.loading = false;

    //   },
    //   error: error => {
    //     console.log(error);
    //   }

    // });

  }


  loadAllCustomers(): any {

    this.cols = [
      { field: 'full_Name', header: 'Name' },
      { field: 'email',  header: 'Email' },
      { field: 'phone', header: 'Phone' },
      { field: 'created_at', header: 'Joining' },
      // { field: 'driverStatus', subfield: 'Title', header: 'Status' },
      // { field: 'ActiveUser', header: 'Activity' },
      // { field: 'Prioritize', header: 'Prioritize' },
      { field: 'Action', header: 'Action' }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));

    this.loading = true;
  }


  loadcustomersLazy(event: LazyLoadEvent, dt) {
    
    console.log("--------loadcustomersLazy----------");
    console.log(event);
    console.log(dt);
    this.loading = true;
    
    // check the filters
    if (event.filters["full_Name"] != undefined || event.filters["email"] != undefined || event.filters["phone"] != undefined || event.filters["created_at"] != undefined ) {
      console.log(event.filters);
      this.adminCustomerModel = new AdminCustomerListDAO();
      // this.driverDetails.status = new Driverstatus();
      if (event.filters["first_name"] != undefined) {
        this.adminCustomerModel.full_Name = event.filters["full_Name"].value;
      }
      if (event.filters["email"] != undefined) {
        this.adminCustomerModel.email = event.filters["email"].value;
      }
      if (event.filters["phone"] != undefined) {
        this.adminCustomerModel.phone = event.filters["phone"].value;
      }
      if (event.filters["created_at"] != undefined) {
        this.adminCustomerModel.created_at = event.filters["created_at"].value;
      }
      // if (event.filters["driverStatus"] != undefined) {
      //   this.adminCustomerListModel.status.Id = event.filters["driverStatus"].value;
      // }

      // this.spinner.hide();
      
      setTimeout(() => {
        
        this._customersService.getCustomrsFilteredRecords(this.adminCustomerModel, (event.first / event.rows) + 1, event.rows, event.sortField, event.sortOrder).subscribe(data => {
          console.log(data);
          this.adminCustomerListDAO = data;
          this.totalRecords = data.length;

          if (this.adminCustomerListDAO) {
            this.loading = false;
            
          }
        });
      }, 1000);
    }
    else {

      // this.spinner.hide();
      //imitate db connection over a network
      setTimeout(() => {
        this._customersService.getAllCustomersFirst((event.first / event.rows) + 1, event.rows).subscribe(data => {
          console.log("data");
          console.log(data);
          this.adminCustomerListDAO = data;
          this.totalRecords = data.length;
          console.log(" this.adminCustomerListDAO");
          console.log(this.adminCustomerListDAO);

          if (this.adminCustomerListDAO) {
            this.loading = false;
            console.log(dt);
            this.selectedCustomers = null;
          }
        });
      }, 1000);
    }
  }



  //------------------------statusChange start-------------------
  // statusChange(id: string, status: boolean): void {
  //   this._customersService.statusChange(id, status).pipe(first()).subscribe({
  //     next: response => {
  //       console.log(response);
  //       this.MessageFun(response.status, response.message, response.result);
  //     },
  //     error: error => {
  //       this.MessageFun('Error', error, false);
  //     }
  //   });
  // }
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


  exportCsv() {

    let tableRef: ElementRef<HTMLTableElement> = this.resultTable.tableViewChild;
    let table = tableRef.nativeElement;

    this._customersService.exportCsv(table, "customerDetails.csv");

  }

  exportToExcel(){
  
    //---------------------------------------------------------------
    this.exportLst = [];
    console.log("this.selectedCustomers");
    console.log(this.selectedCustomers);
    if (this.selectedCustomers) {
      this.selectedCustomers.forEach(data => {
        this.exportLst.push({
          full_Name: data.full_Name, email: data.email,
          phone: data.phone, created_at: data.created_at
        })
      });

      this.exportExcel(this.exportLst);
    }

    else if (this.adminCustomerListDAO) {

      this.adminCustomerListDAO.forEach(data => {
        this.exportLst.push({
          full_Name: data.full_Name, email: data.email,
          phone: data.phone, created_at: data.created_at
        })
      });

      // this._customersService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
      //   data.lstDrivers.forEach((i) => {
      //     this.exportLst.push({
      //       FirstName: i.FirstName, LastName: i.LastName,
      //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
      //     })
      //   });

        this.exportExcel(this.exportLst);
      // });

    }
    else {
      // this.spinner.show();
      // this.driverService.exportAllDrivers().subscribe(data => {
      //   data.lstDrivers.forEach((i) => {
      //     this.exportLst.push({
      //       FirstName: i.FirstName, LastName: i.LastName,
      //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
      //     })
      //   });

      //   this.spinner.hide();
      //   this.exportExcel(this.exportLst);
      // });
    }
    //---------------------------------------------------------------

   
  }


  exportExcel(exportLst: ExportCustomer[]) {

    import("xlsx").then(xlsx => {
      if (this.exportLst.length>0) {
        console.log(exportLst);
        const worksheet = xlsx.utils.json_to_sheet(exportLst);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "customersDetails");
      }
    });
  }

  
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }


  showBasicDialog() {
    this.displayBasic = true;
}


getRecordByDateRange(){

  let startDate =this._datepipe.transform(this.rangeDates[0], 'yyyy-MM-dd');
  let endDate =this._datepipe.transform(this.rangeDates[1], 'yyyy-MM-dd');

  this._customersService.getCustomerRecordByDateRange((0 / 10) + 1, 10,startDate,endDate).subscribe(data => {

    this.adminCustomerListDAO = data;
    this.totalRecords = data.length;

    if (this.adminCustomerListDAO) {
      this.loading = false;

    }
  });

  this.displayBasic = false;

}



//--------export to pdf start-----------------

exportPdf() {

  alert();
  import("jspdf").then(jsPDF => {
    import("jspdf-autotable").then(x => {
      const doc = new jsPDF.default(0,0); 

      this.exportLst = [];
      if (this.selectedCustomers) {
        this.selectedCustomers.forEach(data => {
          this.exportLst.push({
            full_Name: data.full_Name, email: data.email,
          phone: data.phone, created_at: data.created_at
          })
        });

        
        doc.autoTable(this.exportColumns, this.exportLst);
      }
      else if (this.adminCustomerListDAO) {

        this.adminCustomerListDAO.forEach(data => {
          this.exportLst.push({
            full_Name: data.full_Name, email: data.email,
          phone: data.phone, created_at: data.created_at
          });
        });

        // this.driverService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
        //   data.lstDrivers.forEach((i) => {
        //     this.exportLst.push({
        //       FirstName: i.FirstName, LastName: i.LastName,
        //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
        //     })
        //   });

          doc.autoTable(this.exportColumns, this.exportLst);
        // });
      }
      else {
        // this.spinner.show();
        // this.driverService.exportAllDrivers().subscribe(data => {
        //   data.lstDrivers.forEach((i) => {
        //     this.exportLst.push({
        //       FirstName: i.FirstName, LastName: i.LastName,
        //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
        //     })
        //   });

        //   this.spinner.hide();
        //   this.exportExcel(this.exportLst);
        // });
      }

      //doc.autoTable(this.exportColumns, this.lstDrivers);
      doc.save('CustomerTable.pdf');
    });
  });
}
//--------export to pdf end-----------------


}
