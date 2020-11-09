import { HttpClient } from '@angular/common/http';
import { Message, MessageService } from 'primeng/api';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
// import { saveAs as importedSaveAs } from "file-saver";  
import { FileService } from '../../../FileService/file.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { MerchantsService } from '../../../services/merchants.service'
import { Merchants } from '../../../_models/merchants';


@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css'],
  providers: [MessageService]
})
export class AddMerchantComponent implements OnInit {

  merchant: Merchants;
  selectedFile: File = null;
  imageUrl: string;
  fileToUpload: File = null;
  saveMerchantDataForm: any;
  lstFileDetails: any;
  msgs: Message[];

  public message: string;
  public progress: number;
  @Output() public onUploadFinished = new EventEmitter();

  uploadedFiles: any[] = [];
  phoneNumberVal: string;
  submitted = false;

  constructor(
    private _messageService: MessageService,
    private _http: HttpClient,
    private _fileService: FileService,
    private _formBuilder: FormBuilder,
    private _merchantsService:MerchantsService
  ) { }

  ngOnInit(): void {

    this.imageUrl = './assets/blank-profile.png';
    this.saveMerchantDataForm = this._formBuilder.group({
      brandName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      userName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    });

  }


  onSubmitMerchantData() {

    // stop here if form is invalid
    if (this.saveMerchantDataForm.invalid) {
      return;
    }
    
    const merchant = this.saveMerchantDataForm.value;  
    console.log(merchant);
    this.CreateMerchants(merchant);

  }

  resetForm() {
    this.saveMerchantDataForm.reset();
  }


  myUploader(event) {

    this.uploadedFiles = event.files;
    console.log(event.files);
    console.log(this.uploadedFiles);

  }


  CreateMerchants(merchant:Merchants){
    
    console.log(this.uploadedFiles);

    if (this.uploadedFiles.length === 0) {
      return;
    }

    let fileToUpload = <File>this.uploadedFiles[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.merchant = this.saveMerchantDataForm.value;
    formData.append('merchant', JSON.stringify(this.merchant));
   
    console.log(this.merchant);

    this._merchantsService.SaveMerchant(formData).pipe(first()).subscribe({
      next: response => {
        console.log(response);
        this.MessageFun(response.status, response.message);
      },
      error: error => {
        this.MessageFun("error", error);
      }
    });

    
  }


    //-------------message -------method-------start---------------
    MessageFun(status: string, message: string): void {

      this.msgs = [
        {
          severity: status.toLowerCase(),
          summary: status,
          detail: message
        }
      ]
  
    }
    //-------------message -------method-------end--------------- 


}
