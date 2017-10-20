import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowseComponent } from './browse/browse.component';
import { FadeHighlightDirective } from './fade.directive';
import {HttpModule} from "@angular/http";

const routes: Routes = [
  { path : 'categories', component : CategoriesComponent },
  { path : 'browse',     component : BrowseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CategoriesComponent,
    BrowseComponent,
    FadeHighlightDirective
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
