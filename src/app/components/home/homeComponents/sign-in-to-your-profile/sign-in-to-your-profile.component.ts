import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in-to-your-profile',
    templateUrl: './sign-in-to-your-profile.component.html',
    styleUrls: ['./sign-in-to-your-profile.component.css']
})

/**
 * sign in to your profile component
 */
export class SignInToYourProfileComponent implements OnInit {

    // sign in to your profile form variables
    private signInForm: FormGroup;
    private signInEmail = new FormControl('', [Validators.required, Validators.email]);
    private signInPassword = new FormControl('', [Validators.required]);

    // sign in to your profile constructor
    constructor(private formBuilder: FormBuilder) {
        this.signInForm = formBuilder.group({
            signInEmail: this.signInEmail,
            signInPassword: this.signInPassword
        });
    }

    // sign in to your profile ngOnInit
    ngOnInit(): void { }

    // sign in to your profile email error
    private getSignInEmailErrorMessage = () => {
        if (this.signInEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.signInEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // sign in to your profile password error
    private hideSignInPassword = true;
    private getSignInPasswordErrorMessage = () => {
        return this.signInPassword.hasError('required') ? 'You must enter your password' : '';
    }

    // sign in to your profile form on submit
    private onSignInFormSubmit = () => {
        // TODO: Use EventEmitter with form value
        // TODO: Impliment the form
        console.log(this.signInForm.value);
    }
}
