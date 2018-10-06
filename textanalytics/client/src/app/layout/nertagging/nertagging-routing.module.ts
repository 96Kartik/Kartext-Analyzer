import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NerTaggingComponent } from './nertagging.component';

const routes: Routes = [
    { path: '', component: NerTaggingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NerTaggingRoutingModule { }
