import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  closeButtonClass = '';
  isNavMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.closeButtonClass = this.closeButtonClass === 'change' ? '' : 'change';
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

}
