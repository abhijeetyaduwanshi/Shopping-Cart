import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartedProducts = JSON.parse(localStorage.getItem("cartedProducts")) || [];

  constructor() { }

  ngOnInit(): void {
  }
}
