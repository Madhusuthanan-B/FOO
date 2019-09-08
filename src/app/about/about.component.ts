import { Component, OnInit } from '@angular/core';
import { BOUNCE_IN } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [...BOUNCE_IN],
})
export class AboutComponent implements OnInit {
  bounceIn: any;
  constructor() { }

  ngOnInit() {
  }

}
