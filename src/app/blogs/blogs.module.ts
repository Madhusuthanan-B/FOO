import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { routes } from './blogs.routing';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule { }
