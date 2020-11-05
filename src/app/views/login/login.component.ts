
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private _router:Router,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService
        ){
                // redirect to home if already logged in
            if(this._authenticationService.currentUser) { 
                this._router.navigate(['dashboard']);
            }

        }

        //-----------------------------------------------------------------
        
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        console.log(this._route.snapshot.queryParams);
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || 'dashboard';
    }

         // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this._authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                   // console.log(this.returnUrl);
                    this._router.navigate([this.returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });

    }
    

    goToPage(pageName:string):void{
        this._router.navigate([`${pageName}`]);
    }


}