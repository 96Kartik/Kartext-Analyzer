import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentenceTaggingComponent } from './sentencetagging.component';

const routes: Routes = [
    { path: '', component: SentenceTaggingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SentenceTaggingRoutingModule { }
