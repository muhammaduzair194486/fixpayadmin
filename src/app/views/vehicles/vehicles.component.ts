import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig, SelectItem, MenuItem, SelectItemGroup } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { VehiclesService } from './../../services/vehicles.service';

//------------------demo model -----start---
export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

interface Countries {
  name: string,
  code: string
}

export interface Customer {
  id?: number;
  name?: number;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
}
//------------------demo model -----end---

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})




export class VehiclesComponent implements OnInit {

  //--for drop down variable start----
  items: SelectItem[];
  item: string;
  //--for drop down variable end----

  //-----------add vehicle start method---
  displayBasic2: boolean;
  Nr: string;
   countries: Countries[];
  selectedCountry: string;
  //-----------add vehicle end method---


  customers: Customer[];
  selectedCustomers: Customer[];
  representatives: Representative[];
  statuses: any[];
  loading: boolean = true;
  @ViewChild('dt') table: Table;


  constructor(private _vehiclesService: VehiclesService,
    private _primengConfig: PrimeNGConfig) {

      

      this.countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
      ];

    //------for drop down demo start----
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({ label: "item " + i, value: "item " + i });
    }
    //------for drop down demo end----

   

  }

  ngOnInit(): void {



    //-------get all data demo start---------
    this._vehiclesService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
    });

    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]
    this._primengConfig.ripple = true;
    //-------get all data demo end---------

  }

  //---------demo  status change start---

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }


  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
  }


  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }


  onRepresentativeChange(event) {
    this.table.filter(event.value, 'representative', 'in')
  }
  //---------demo  status change end---

  //-----------add vehicle start method---
  showBasicDialog2() {
    this.displayBasic2 = true;
  }
  //-----------add vehicle end method---


  onSubmit(){
    
  }


}
