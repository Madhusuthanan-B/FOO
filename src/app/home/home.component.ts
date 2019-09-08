import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  blogs() {
    (window as any).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'Blog',
      eventAction: 'eventAction',
      eventValue: 10
    });
    this.router.navigate(['blogs']);
  }

}
