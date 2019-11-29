import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './metrics.component';
import { RouterModule } from '@angular/router';
import { routes } from './metrics.routing';

@NgModule({
  declarations: [MetricsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MetricsModule { }
