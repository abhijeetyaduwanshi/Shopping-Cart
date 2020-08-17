import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavigationService } from './../../services/navigationService/navigation.service';
import { ProductService } from './../../services/productService/product.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

    @Output() private sidenavToggle = new EventEmitter();

    public navigationData: any = [];
    public cartCount = 0;
    public subscription: Subscription;

    constructor(private navigationApi: NavigationService, private productApi: ProductService) {
        this.updateAddCartCount();
    }

    ngOnInit() {
        this.getNavigation();
        this.getCartCount();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private getNavigation = () => {
        this.navigationApi.getNavigation().subscribe(data => {
            this.navigationData = data;
        })
    }

    private onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

    private getCartCount = () => {
        const cartedProducts = JSON.parse(localStorage.getItem("cartedProducts")) || [];
        for (let i = 0; i < cartedProducts.length; i++) {
            this.cartCount += cartedProducts[i].count;
        }
    }

    public updateAddCartCount = () => {
        this.subscription = this.productApi.getAddedCartCount().subscribe(data => {
            this.cartCount += data;
        })
    }
}
