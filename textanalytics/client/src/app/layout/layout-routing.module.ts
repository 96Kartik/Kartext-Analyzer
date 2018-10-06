import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'tokenization', loadChildren: './tokenization/tokenization.module#TokenizationModule' },
            { path: 'sentanlys', loadChildren: './sentanlys/sentanlys.module#SentanlysModule' },
            { path: 'sentencetagging', loadChildren: './sentencetagging/sentencetagging.module#SentenceTaggingModule' },
            { path: 'nertagging', loadChildren: './nertagging/nertagging.module#NerTaggingModule' },
            { path: 'coreferencing', loadChildren: './coreferencing/coreferencing.module#CoreferencingModule' },
            { path: 'conceptextraction', loadChildren: './conceptextraction/conceptextraction.module#ConceptExtractionModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
