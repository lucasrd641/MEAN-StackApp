import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  constructor() {}

  ngOnInit(): void {}
}
