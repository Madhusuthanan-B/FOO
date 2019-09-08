import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  closeButtonClass = '';
  isNavMenuOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home']);
  }

  toggleMenu() {
    this.closeButtonClass = this.closeButtonClass === 'change' ? '' : 'change';
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

}
