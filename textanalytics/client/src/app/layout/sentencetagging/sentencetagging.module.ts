import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SentenceTaggingRoutingModule } from './sentencetagging-routing.module';
import { SentenceTaggingComponent } from './sentencetagging.component';
import { TextService } from './text.service';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [
    CommonModule,
    SentenceTaggingRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule
  ],
  declarations: [SentenceTaggingComponent
  				 ],

  providers: [
  				TextService],
  bootstrap: [
  				SentenceTaggingComponent]
})
export class SentenceTaggingModule { }
