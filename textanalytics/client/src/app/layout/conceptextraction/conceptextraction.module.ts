import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ConceptExtractionRoutingModule } from './conceptextraction-routing.module';
import { ConceptExtractionComponent } from './conceptextraction.component';
import { TextService } from './text.service';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [
    CommonModule,
    ConceptExtractionRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ConceptExtractionComponent
  				 ],

  providers: [
  				TextService],
  bootstrap: [
  				ConceptExtractionComponent]
})
export class ConceptExtractionModule { }
