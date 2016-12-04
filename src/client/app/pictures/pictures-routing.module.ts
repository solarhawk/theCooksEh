import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pictures.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PicturesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PicturesRoutingModule { }
