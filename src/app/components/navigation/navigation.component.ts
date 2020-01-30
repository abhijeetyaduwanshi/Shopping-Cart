import { Component, OnInit } from '@angular/core';
import { Navigation } from './../../services/navigationService/navigation';
import { NavigationService } from './../../services/navigationService/navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    NavigationData: any = [];

    constructor(private navigationApi: NavigationService) {
        this.navigationApi.GetNavigation().subscribe(data => {
            this.NavigationData = data;
        })
    }

    ngOnInit() { }
}
