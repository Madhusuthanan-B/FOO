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

  routes = [
    {
      displayName: 'Home',
      routeName: 'home',
      isActive: true
    },
    {
      displayName: 'About Me',
      routeName: 'about',
      isActive: false
    },
    {
      displayName: 'Blogs',
      routeName: 'blogs',
      isActive: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['home']);
  }


  navigateTo(route: any) {
    this.routes.forEach(r => r.isActive = false);
    route.isActive = true;
    this.toggleMenu();
    this.router.navigate([route.routeName]);
  }
  toggleMenu() {
    this.closeButtonClass = this.closeButtonClass === 'change' ? '' : 'change';
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

}
