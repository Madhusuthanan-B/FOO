import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BOUNCE_IN } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [...BOUNCE_IN]
})
  export class HomeComponent implements OnInit {
    bounceIn: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  blogs() {
    this.router.navigate(['blogs']);
  }

}
