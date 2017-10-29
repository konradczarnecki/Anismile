import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FadeHighlightDirective } from './fade.directive';
import { HttpModule } from "@angular/http";
import { PreviewComponent } from './preview/preview.component';
import { OwnedComponent } from './owned/owned.component';
import { GridComponent } from './grid/grid.component';
import { FetchService } from "./fetch.service";
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path : 'owned',     component : OwnedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FadeHighlightDirective,
    PreviewComponent,
    OwnedComponent,
    GridComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
