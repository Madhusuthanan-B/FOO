import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() totalStars;
  @Input() value;
  starCount: any;
  constructor() { }

  ngOnInit() {
    this.totalStars = 5;
    this.starCount = Array(this.totalStars).fill(this.totalStars).map((x, i) => i);
    console.log('fill', this.starCount);
  }

}
