import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

}
