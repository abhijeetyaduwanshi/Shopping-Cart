import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

/**
 * home page component
 */
export class HomeComponent implements OnInit {

    // home page constructor
    constructor(private dialog: MatDialog) { }

    // home page ngOnInit
    ngOnInit(): void { }

    /**
     * home page sign in forms fields
     */

    // sign in email
    private signInEmail = new FormControl('', [Validators.required, Validators.email]);
    private getSignInEmailErrorMessage = () => {
        if (this.signInEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.signInEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // sign in password
    private signInPassword = new FormControl('', [Validators.required]);
    private hideSignInPassword = true;
    private getSignInPasswordErrorMessage = () => {
        return this.signInPassword.hasError('required') ? 'You must enter your password' : '';
    }

    /**
     * home page create account forms fields
     */

    // create account first name
    private createAccountFirstName = new FormControl('', [Validators.required]);
    private getCreateAccountFirstNameErrorMessage = () => {
        return this.createAccountFirstName.hasError('required') ? 'You must enter your first name' : '';
    }

    // create account last name
    private createAccountLastName = new FormControl('', [Validators.required]);
    private getCreateAccountLastNameErrorMessage = () => {
        return this.createAccountLastName.hasError('required') ? 'You must enter your last name' : '';
    }

    // create account email
    private createAccountEmail = new FormControl('', [Validators.required, Validators.email]);
    private getCreateAccountEmailErrorMessage = () => {
        if (this.createAccountEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.createAccountEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // create account confirm email
    private createAccountConfirmEmail = new FormControl('', [Validators.required, Validators.email]);
    private getCreateAccountConfirmEmailErrorMessage = () => {
        if (this.createAccountConfirmEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.createAccountConfirmEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // create account password
    private createAccountPassword = new FormControl('', [Validators.required]);
    private hideCreateAccountPassword = true;
    private getCreateAccountPasswordErrorMessage = () => {
        return this.createAccountPassword.hasError('required') ? 'You must enter your password' : '';
    }

    // create account confirm password
    private createAccountConfirmPassword = new FormControl('', [Validators.required]);
    private hideCreateAccountConfirmPassword = true;
    private getCreateAccountConfirmPasswordErrorMessage = () => {
        return this.createAccountConfirmPassword.hasError('required') ? 'You must enter your password' : '';
    }

    /**
     * home page delivery option dialog
     */
    private openDeliveryDialog = () => {
        this.dialog.open(TemporaryDeliveryDialog);
      }

    /**
     * home page pickup option dialog
     */
    private openPickupDialog = () => {
        this.dialog.open(PickupDialog);
    }
}


@Component({
    selector: 'temporary-delivery-dialog',
    templateUrl: './delivery.pickup.dialogs/temporary.delivery.dialog/temporary-delivery-dialog.html',
    styleUrls: ['./delivery.pickup.dialogs/temporary.delivery.dialog/temporary-delivery-dialog.css']
})

/**
 * temporary delivery dialog component
 */
export class TemporaryDeliveryDialog {}


@Component({
    selector: 'pickup-dialog',
    templateUrl: './delivery.pickup.dialogs/pickup.dialog/pickup-dialog.html',
    styleUrls: ['./delivery.pickup.dialogs/pickup.dialog/pickup-dialog.css']
})

/**
 * pickup dialog component
 */
export class PickupDialog {

    // pickup dialog constructor
    constructor() { }

    // pickup dialog ngOnInit
    ngOnInit(): void { }

    /**
     * pickup dialog details forms fields
     */

    // pickup details first name
    private pickupDetailsFirstName = new FormControl('', [Validators.required]);
    private getPickupDetailsFirstNameErrorMessage = () => {
        return this.pickupDetailsFirstName.hasError('required') ? 'You must enter your first name' : '';
    }

    // pickup details last name
    private pickupDetailsLastName = new FormControl('', [Validators.required]);
    private getPickupDetailsLastNameErrorMessage = () => {
        return this.pickupDetailsLastName.hasError('required') ? 'You must enter your last name' : '';
    }

    // pickup details email
    private pickupDetailsEmail = new FormControl('', [Validators.required, Validators.email]);
    private getPickupDetailsEmailErrorMessage = () => {
        if (this.pickupDetailsEmail.hasError('required')) {
            return 'You must enter your email';
        }
        return this.pickupDetailsEmail.hasError('email') ? 'Not a valid email' : '';
    }

    // pickup details phone
    private pickupDetailsPhone = new FormControl('', [Validators.required]);
    private getPickupDetailsPhoneErrorMessage = () => {
        return this.pickupDetailsPhone.hasError('required') ? 'You must enter your phone number' : '';
    }
}
