import { ActivationEnd } from '@angular/router';
import { documents } from '../_models/documents';
import { customer_Wallet } from '../_models/customer_wallet';

export class AdminCustomerListDAO{
    id?:string;
    full_Name?:string;
    image?:string;
    phone?:string;
    email:string;
    Username?:string;
    created_at: Date;
    updated_at: Date;
    active:boolean;
    documents:documents;
    customer_Wallet:customer_Wallet;
    

}



export class CustomerDetailsFA{

  id:string;
  fullName:string;
  image:string
  phoneNumber:string;
  email:string; 
  username:string; 
  firebaseToken:string; 
  createDate:Date; 
  active:Boolean;
  totalBalance:number; 

}



export class CashbackListFA
{
      cashbackId:string;
      cashbackTypeTitle:string;
      cashbackTypeNumber:number; 
      cashbackCategoryTitle:string; 
      cashbackCategoryNumber:number;
      rewardPoints:string;
      createDate:Date;
      active:boolean;
      isCollect:boolean;

}


export class TransactionListFA
{
      transactionModeTile:string;
      transactionModeNumber:number;
      transactionTypeTitle:string;
      paymentModeNumber:number;
      amount:number;
      brandName:string;
      createDate:Date;
}


export class FriendListModelFA
{
      customerId:string;
      fullName:string;
      phoneNumber:string; 
      userName:string;
      email:string;
      image:string;
      friendRequestId:string; 
      customerRequestedId:string;
      customerRecievedId:string;
      friendRequestFlagId:string;
      friendRequestFlagTitle:string;
      number:number;
}


