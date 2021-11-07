import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-api',
  templateUrl: './nav-bar-api.component.html',
  styleUrls: ['./nav-bar-api.component.css']
})
export class NavBarApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  injectParam='users';
}
