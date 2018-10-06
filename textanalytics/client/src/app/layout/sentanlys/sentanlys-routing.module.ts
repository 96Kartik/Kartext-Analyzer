import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentanlysComponent } from './sentanlys.component';

const routes: Routes = [
    { path: '', component: SentanlysComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SentanlysRoutingModule { }
