import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TokenizationRoutingModule } from './tokenization-routing.module';
import { TokenizationComponent } from './tokenization.component';
import { TextService } from './text.service';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [
    CommonModule,
    TokenizationRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule
  ],
  declarations: [TokenizationComponent
  				 ],

  providers: [
  				TextService],
  bootstrap: [
  				TokenizationComponent]
})
export class TokenizationModule { }
