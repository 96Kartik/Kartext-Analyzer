import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConceptExtractionComponent } from './conceptextraction.component';

const routes: Routes = [
    { path: '', component: ConceptExtractionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConceptExtractionRoutingModule { }
