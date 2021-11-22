import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-or-pickup',
  templateUrl: './delivery-or-pickup.component.html',
  styleUrls: ['./delivery-or-pickup.component.css']
})

export class DeliveryOrPickupComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  /**
   * Curbside pickup option dialog
   */
  openCurbsidePickupDialog = () => {
    this.dialog.open(CurbsidePickupDialog);
  }

  /**
   * Delivery option dialog
   */
  openDeliveryDialog = () => {
    this.dialog.open(DeliveryDialog);
  }

  /**
   * Pickup option dialog
   */
  openPickupDialog = () => {
    this.dialog.open(PickupDialog);
  }
}

@Component({
  selector: 'curbside-pickup-dialog',
  templateUrl: './../../dialogs/curbside.pickup.dialog/curbside-pickup-dialog.html',
  styleUrls: ['./../../dialogs/curbside.pickup.dialog/curbside-pickup-dialog.css']
})

export class CurbsidePickupDialog { }

@Component({
  selector: 'delivery-dialog',
  templateUrl: './../../dialogs/delivery.dialog/delivery-dialog.html',
  styleUrls: ['./../../dialogs/delivery.dialog/delivery-dialog.css']
})

export class DeliveryDialog {

  constructor(private dialog: MatDialog) { }

  /**
   * Pickup option dialog
   */
  openPickupDialog = () => {
    this.dialog.open(PickupDialog);
  }
}

@Component({
  selector: 'pickup-dialog',
  templateUrl: './../../dialogs/pickup.dialog/pickup-dialog.html',
  styleUrls: ['./../../dialogs/pickup.dialog/pickup-dialog.css']
})

export class PickupDialog {

  pickupDetailsForm: FormGroup;
  pickupDetailsFirstName = new FormControl('', [Validators.required]);
  pickupDetailsLastName = new FormControl('', [Validators.required]);
  pickupDetailsEmail = new FormControl('', [Validators.required, Validators.email]);
  pickupDetailsPhone = new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]);

  constructor(private formBuilder: FormBuilder) {
    this.pickupDetailsForm = formBuilder.group({
      pickupDetailsFirstName: this.pickupDetailsFirstName,
      pickupDetailsLastName: this.pickupDetailsLastName,
      pickupDetailsEmail: this.pickupDetailsEmail,
      pickupDetailsPhone: this.pickupDetailsPhone
    });
  }

  ngOnInit(): void { }

  /**
   * Pickup dialog first name error message
   * 
   * @returns first name error message
   */
  getPickupDetailsFirstNameErrorMessage = () => {
    return this.pickupDetailsFirstName.hasError('required') ? 'You must enter your first name' : '';
  }

  /**
   * Pickup dialog last name error message
   * 
   * @returns last name error message
   */
  getPickupDetailsLastNameErrorMessage = () => {
    return this.pickupDetailsLastName.hasError('required') ? 'You must enter your last name' : '';
  }

  /**
   * Pickup dialog email error message
   * 
   * @returns email error message
   */
  getPickupDetailsEmailErrorMessage = () => {
    if (this.pickupDetailsEmail.hasError('required')) {
      return 'You must enter your email';
    }
    return this.pickupDetailsEmail.hasError('email') ? 'Not a valid email' : '';
  }

  /**
   * Pickup dialog phone error message
   * 
   * @returns phone error message
   */
  getPickupDetailsPhoneErrorMessage = () => {
    if (this.pickupDetailsPhone.hasError('required')) {
      return 'You must enter your phone number';
    }
    return this.pickupDetailsPhone.hasError('pattern') ? 'Not a valid phone' : '';
  }

  /**
   * Pickup dialog form submit
   */
  onPickupDetailsFormSubmit = () => {
    // TODO: Use EventEmitter with form value
    // TODO: Impliment the form
    console.log(this.pickupDetailsForm.value);
  }
}
