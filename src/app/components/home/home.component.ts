import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    private signInEmail = new FormControl('', [Validators.required, Validators.email]);

    private getSignInEmailErrorMessage = () => {
        if (this.signInEmail.hasError('required')) {
            return 'You must enter a value';
        }
        return this.signInEmail.hasError('email') ? 'Not a valid email' : '';
    }

    private signInPassword = new FormControl('', [Validators.required]);
    private hideSignInPassword = true;

    private getSignInPasswordErrorMessage = () => {
        if (this.signInPassword.hasError('required')) {
            return 'You must enter a value';
        }
    }
}
