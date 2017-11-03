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
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path : 'owned', component : GridComponent },
  { path : 'login', component : LoginComponent },
  { path : 'animal/:id', component : DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FadeHighlightDirective,
    PreviewComponent,
    OwnedComponent,
    GridComponent,
    CategoriesComponent,
    LoginComponent,
    DetailsComponent
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
