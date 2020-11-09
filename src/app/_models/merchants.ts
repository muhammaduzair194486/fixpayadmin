export class Merchants {  
    id: string;  
    brandName: string;  
    Email: Date;  
    userName: string;  
    phoneNumber: string;  
    Address: string;  
} 


export class MerchantList{
     id:string;
     brandName:string;
     address:string;
     image :string;
     phoneNumber :string;
     userName :string;
     email :string;
     createDate:Date;
}





export class CashbackDTModel
    {
        CashbackId:string;
        CashbackTypeTitle:string;
        CashbackTypeNumber:number;
        CashbackCategoryTitle:string;
        CashbackCategoryNumber:number; 
        RewardPoints:number; 
        CreateDate:Date;
        Active:boolean;
        IsCollect:boolean;

    }