import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

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

    private createAccountFirstName = new FormControl('', [Validators.required]);
    private getCreateAccountFirstNameErrorMessage = () => {
        if (this.createAccountFirstName.hasError('required')) {
            return 'You must enter a value';
        }
    }

    private createAccountLastName = new FormControl('', [Validators.required]);
    private getCreateAccountLastNameErrorMessage = () => {
        if (this.createAccountLastName.hasError('required')) {
            return 'You must enter a value';
        }
    }

    private createAccountEmail = new FormControl('', [Validators.required, Validators.email]);
    private getCreateAccountEmailErrorMessage = () => {
        if (this.createAccountEmail.hasError('required')) {
            return 'You must enter a value';
        }
        return this.createAccountEmail.hasError('email') ? 'Not a valid email' : '';
    }

    private createAccountConfirmEmail = new FormControl('', [Validators.required, Validators.email]);
    private getCreateAccountConfirmEmailErrorMessage = () => {
        if (this.createAccountConfirmEmail.hasError('required')) {
            return 'You must enter a value';
        }
        return this.createAccountConfirmEmail.hasError('email') ? 'Not a valid email' : '';
    }

    private createAccountPassword = new FormControl('', [Validators.required]);
    private hideCreateAccountPassword = true;
    private getCreateAccountPasswordErrorMessage = () => {
        if (this.createAccountPassword.hasError('required')) {
            return 'You must enter a value';
        }
    }

    private createAccountconfirmPassword = new FormControl('', [Validators.required]);
    private hideCreateAccountConfirmPassword = true;
    private getCreateAccountConfirmPasswordErrorMessage = () => {
        if (this.createAccountconfirmPassword.hasError('required')) {
            return 'You must enter a value';
        }
    }

    private openDeliveryDialog = () => {
        this.dialog.open(TemporaryDeliveryDialog);
      }

    private openPickupDialog = () => {
        this.dialog.open(PickupDialog);
    }
}

@Component({
    selector: 'temporary-delivery-dialog',
    templateUrl: './delivery.pickup.dialogs/temporary.delivery.dialog/temporary-delivery-dialog.html',
    styleUrls: ['./delivery.pickup.dialogs/temporary.delivery.dialog/temporary-delivery-dialog.css']
})

export class TemporaryDeliveryDialog {}

@Component({
    selector: 'pickup-dialog',
    templateUrl: './delivery.pickup.dialogs/pickup.dialog/pickup-dialog.html',
    styleUrls: ['./delivery.pickup.dialogs/pickup.dialog/pickup-dialog.css']
})

export class PickupDialog {
    constructor() { }

    ngOnInit(): void { }

    private pickupDetailsFirstName = new FormControl('', [Validators.required]);
    private getPickupDetailsFirstNameErrorMessage = () => {
        if (this.pickupDetailsFirstName.hasError('required')) {
            return 'You must enter a value';
        }
    }

    private pickupDetailsLastName = new FormControl('', [Validators.required]);
    private getPickupDetailsLastNameErrorMessage = () => {
        if (this.pickupDetailsLastName.hasError('required')) {
            return 'You must enter a value';
        }
    }

    private pickupDetailsEmail = new FormControl('', [Validators.required, Validators.email]);
    private getPickupDetailsEmailErrorMessage = () => {
        if (this.pickupDetailsEmail.hasError('required')) {
            return 'You must enter a value';
        }
        return this.pickupDetailsEmail.hasError('email') ? 'Not a valid email' : '';
    }

    private pickupDetailsPhone = new FormControl('', [Validators.required]);
    private getPickupDetailsPhoneErrorMessage = () => {
        if (this.pickupDetailsPhone.hasError('required')) {
            return 'You must enter a value';
        }
    }
}
