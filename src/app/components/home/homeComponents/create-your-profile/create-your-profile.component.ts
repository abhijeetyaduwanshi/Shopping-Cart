import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-your-profile',
    templateUrl: './create-your-profile.component.html',
    styleUrls: ['./create-your-profile.component.css']
})

/**
 * create account component
 */
export class CreateYourProfileComponent implements OnInit {

    // create account form variables
    private createAccountForm: FormGroup;
    private createAccountFirstName = new FormControl('', [Validators.required]);
    private createAccountLastName = new FormControl('', [Validators.required]);
    private createAccountEmail = new FormControl('', [Validators.required, Validators.email]);
    private createAccountConfirmEmail = new FormControl('', [Validators.required, Validators.email]);
    private createAccountPassword = new FormControl('', [Validators.required]);
    private hideCreateAccountPassword = true;
    private createAccountConfirmPassword = new FormControl('', [Validators.required]);
    private hideCreateAccountConfirmPassword = true;

    // create account constructor
    constructor(private formBuilder: FormBuilder) {
        this.createAccountForm = formBuilder.group({
            createAccountFirstName: this.createAccountFirstName,
            createAccountLastName: this.createAccountLastName,
            createAccountEmail: this.createAccountEmail,
            createAccountConfirmEmail: this.createAccountConfirmEmail,
            createAccountPassword: this.createAccountPassword,
            createAccountConfirmPassword: this.createAccountConfirmPassword,
        });
    }

    // create account ngOnInit
    ngOnInit(): void { }

    // create account first name error
    private getCreateAccountFirstNameErrorMessage = () => {
        return this.createAccountFirstName.hasError('required') ? 'You must enter your first name' : '';
    }

    // create account last name error
    private getCreateAccountLastNameErrorMessage = () => {
        return this.createAccountLastName.hasError('required') ? 'You must enter your last name' : '';
    }

    // create account email error
    private getCreateAccountEmailErrorMessage = () => {
        if (this.createAccountEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.createAccountEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // create account confirm email error
    private getCreateAccountConfirmEmailErrorMessage = () => {
        if (this.createAccountConfirmEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.createAccountConfirmEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // create account password error
    private getCreateAccountPasswordErrorMessage = () => {
        return this.createAccountPassword.hasError('required') ? 'You must enter your password' : '';
    }

    // create account confirm password error
    private getCreateAccountConfirmPasswordErrorMessage = () => {
        return this.createAccountConfirmPassword.hasError('required') ? 'You must enter your password' : '';
    }

    // create account form on submit
    private onCreateAccountFormSubmit = () => {
        // TODO: Use EventEmitter with form value
        // TODO: Impliment the form
        console.log(this.createAccountForm.value);
    }
}
