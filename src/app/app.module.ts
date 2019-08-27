import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { SidebarComponent } from './base/components/sidebar/sidebar.component';
import { HeaderbarComponent } from './base/components/headerbar/headerbar.component';
import { FooterComponent } from './base/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MomentDemoComponent } from './moment-demo/moment-demo.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { BaseModule } from './base/base.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    SidebarComponent,
    HeaderbarComponent,
    FooterComponent,
    MomentDemoComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
