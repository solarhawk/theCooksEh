import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { VideosRoutingModule } from './videos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, VideosRoutingModule, SharedModule],
  declarations: [VideosComponent],
  exports: [VideosComponent],
  providers: []
})
export class VideosModule { }
