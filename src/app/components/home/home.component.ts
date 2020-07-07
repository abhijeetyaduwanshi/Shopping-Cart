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

    private email = new FormControl('', [Validators.required, Validators.email]);

    private getEmailErrorMessage = () => {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    private password = new FormControl('', [Validators.required]);
    private hide = true;

    private getPasswordErrorMessage = () => {
        if (this.password.hasError('required')) {
            return 'You must enter a value';
        }
    }
}
