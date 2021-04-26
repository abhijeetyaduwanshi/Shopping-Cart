import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavigationService } from './../../../services/navigationService/navigation.service';
import { ProductService } from './../../../services/productService/product.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})

export class TopNavigationComponent implements OnInit {

  @Output() private sidenavToggle = new EventEmitter();

  cartCount: number = 0;
  navigationData: any = [];
  subscription: Subscription;

  constructor(private navigationApi: NavigationService, private productApi: ProductService) {
    this.updateCartCount();
  }

  ngOnInit(): void {
    this.getNavigation();
    this.getCartCount();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

  /**
   * GET navigation
   */
  getNavigation = () => {
    this.navigationApi.getNavigation().subscribe(data => {
      this.navigationData = data;
    })
  }

  /**
   * Toggle side navigation
   */
  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  /**
   * Get the current cart count
   */
  getCartCount = () => {
    const cartedProducts = JSON.parse(localStorage.getItem("cartedProducts")) || [];
    for (let i = 0; i < cartedProducts.length; i++) {
      this.cartCount += cartedProducts[i].count;
    }
  }

  /**
   * Update the cart count
   */
  updateCartCount = () => {
    this.subscription = this.productApi.getCartCount().subscribe(data => {
      this.cartCount += data;
    })
  }
}
