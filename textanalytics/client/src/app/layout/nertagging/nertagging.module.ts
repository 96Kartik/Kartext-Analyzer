import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NerTaggingRoutingModule } from './nertagging-routing.module';
import { NerTaggingComponent } from './nertagging.component';
import { TextService } from './text.service';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [
    CommonModule,
    NerTaggingRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule
  ],
  declarations: [NerTaggingComponent
  				 ],

  providers: [
  				TextService],
  bootstrap: [
  				NerTaggingComponent]
})
export class NerTaggingModule { }
