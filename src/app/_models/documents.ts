import { ActivationEnd } from '@angular/router';

export class documents{
        id?:string;
        customer_id?:string;
        File_Path:string;
        File_Name:string;
        File_Size:string;
        File_Type:string;
        Documnet_No:number;
        Active:boolean
        created_at:Date; 
        updated_at:Date
}