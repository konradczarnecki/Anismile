import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowseComponent } from './browse/browse.component';
import { FadeHighlightDirective } from './fade.directive';
import {HttpModule} from "@angular/http";
import { PreviewComponent } from './preview/preview.component';
import { OwnedComponent } from './owned/owned.component';

const routes: Routes = [
  { path : 'categories', component : CategoriesComponent },
  { path : 'owned',     component : OwnedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CategoriesComponent,
    BrowseComponent,
    FadeHighlightDirective,
    PreviewComponent,
    OwnedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
