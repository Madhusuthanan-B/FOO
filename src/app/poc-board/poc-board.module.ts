import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocBoardComponent } from './poc-board.component';
import { LayoutComponent } from './layout/layout.component';
import { GridsterModule } from 'angular-gridster2';
import { RadialProgressModule } from '../radial-progress/radial-progress.module';
import { RouterModule } from '@angular/router';
import { routes } from './poc-board.routing';

@NgModule({
  declarations: [PocBoardComponent, LayoutComponent],
  imports: [
    CommonModule,
    GridsterModule,
    RadialProgressModule,
    RouterModule.forChild(routes)
  ],
  exports: [PocBoardComponent, LayoutComponent]
})
export class PocBoardModule { }
