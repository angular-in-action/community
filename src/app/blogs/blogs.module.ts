import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

import { BlogsService } from './services/blogs.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
