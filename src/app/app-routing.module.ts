import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { MomentDemoComponent } from './moment-demo/moment-demo.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [

  { path: 'pipes', component: PipeComponent,canActivate:[AuthGuardService]},
  { path: 'momentDemo', component: MomentDemoComponent,canActivate:[AuthGuardService]},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule',canActivate:[AuthGuardService]}
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
