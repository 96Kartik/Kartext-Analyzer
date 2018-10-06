import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SentanlysRoutingModule } from './sentanlys-routing.module';
import { SentanlysComponent } from './sentanlys.component';
import { TextService } from './text.service';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [
    CommonModule,
    SentanlysRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule
  ],
  declarations: [SentanlysComponent
  				 ],

  providers: [
  				TextService],
  bootstrap: [
  				SentanlysComponent]
})
export class SentanlysModule { }
