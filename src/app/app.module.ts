import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import {TestInterceptor} from './test.interceptor';
import{HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import { OktaCheckComponentComponent } from './okta-check-component/okta-check-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    OktaCheckComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TestInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
