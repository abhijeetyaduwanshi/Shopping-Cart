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

  openDeliveryDialog = () => {
    this.dialog.open(DeliveryDialog);
  }

  openPickupDialog = () => {
    this.dialog.open(PickupDialog);
  }
}

@Component({
  selector: 'delivery-dialog',
  templateUrl: './../../dialogs/delivery.dialog/delivery-dialog.html',
  styleUrls: ['./../../dialogs/delivery.dialog/delivery-dialog.css']
})

export class DeliveryDialog {

  constructor(private dialog: MatDialog) { }

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

  getPickupDetailsFirstNameErrorMessage = () => {
    return this.pickupDetailsFirstName.hasError('required') ? 'You must enter your first name' : '';
  }

  getPickupDetailsLastNameErrorMessage = () => {
    return this.pickupDetailsLastName.hasError('required') ? 'You must enter your last name' : '';
  }

  getPickupDetailsEmailErrorMessage = () => {
    if (this.pickupDetailsEmail.hasError('required')) {
      return 'You must enter your email';
    }
    return this.pickupDetailsEmail.hasError('email') ? 'Not a valid email' : '';
  }

  getPickupDetailsPhoneErrorMessage = () => {
    if (this.pickupDetailsPhone.hasError('required')) {
      return 'You must enter your phone number';
    }
    return this.pickupDetailsPhone.hasError('pattern') ? 'Not a valid phone' : '';
  }

  onPickupDetailsFormSubmit = () => {
    // TODO: Use EventEmitter with form value
    // TODO: Impliment the form
    console.log(this.pickupDetailsForm.value);
  }
}
