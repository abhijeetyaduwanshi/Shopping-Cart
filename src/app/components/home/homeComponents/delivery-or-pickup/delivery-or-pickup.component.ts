import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-delivery-or-pickup',
    templateUrl: './delivery-or-pickup.component.html',
    styleUrls: ['./delivery-or-pickup.component.css']
})

/**
 * delivery or pickup component
 */
export class DeliveryOrPickupComponent implements OnInit {

    // delivery or pickup constructor
    constructor(private dialog: MatDialog) { }

    // delivery or pickup ngOnInit
    ngOnInit(): void { }

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
    templateUrl: './../../dialogs/temporary.delivery.dialog/temporary-delivery-dialog.html',
    styleUrls: ['./../../dialogs/temporary.delivery.dialog/temporary-delivery-dialog.css']
})

/**
 * temporary delivery dialog component
 */
export class TemporaryDeliveryDialog {}


@Component({
    selector: 'pickup-dialog',
    templateUrl: './../../dialogs/pickup.dialog/pickup-dialog.html',
    styleUrls: ['./../../dialogs/pickup.dialog/pickup-dialog.css']
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
