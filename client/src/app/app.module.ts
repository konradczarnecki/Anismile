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
import {LoginService} from "./login/login.service";
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path : 'owned', component : GridComponent, canActivate : [LoginService] },
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
    DetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [FetchService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
