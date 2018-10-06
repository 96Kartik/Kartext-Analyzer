import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CoreferencingRoutingModule } from './coreferencing-routing.module';
import { CoreferencingComponent } from './coreferencing.component';
import { TextService } from './text.service';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [
    CommonModule,
    CoreferencingRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule
  ],
  declarations: [CoreferencingComponent
  				 ],

  providers: [
  				TextService],
  bootstrap: [
  				CoreferencingComponent]
})
export class CoreferencingModule { }
