import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigationService } from './../../../services/navigationService/navigation.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})

export class SideNavigationComponent implements OnInit {

  @Output() private sidenavClose = new EventEmitter();

  navigationData: any = [];

  constructor(private navigationApi: NavigationService) { }

  ngOnInit(): void {
    this.getNavigation();
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
   * Close side navigation
   */
  onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
