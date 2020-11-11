import { ActivationEnd } from '@angular/router';

export class CustomerList{
    id?:string;
    fullName?:string;
    Image?:string;
    phoneNumber?:string;
    email:string;
    Username?:string;
    createDate: Date;
    active:boolean;
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


