import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewerComponent } from './viewer/viewer.component';
import { routes } from './viewer.routing';

@NgModule({
  declarations: [ViewerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewerModule { }
