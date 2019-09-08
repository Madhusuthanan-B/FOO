import { Component, OnInit } from '@angular/core';
import { BOUNCE_IN } from 'src/app/animations';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [BOUNCE_IN]
})
export class BlogsComponent implements OnInit {
  bounceIn: any;

  constructor() { }

  ngOnInit() {
  }

}
