import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenizationComponent } from './tokenization.component';

const routes: Routes = [
    { path: '', component: TokenizationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TokenizationRoutingModule { }
