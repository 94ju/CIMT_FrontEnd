import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { UserComponent } from './user/user.component';
import { AwsComponent } from './cloudProviders/aws/aws.component';
import { GcpComponent } from './cloudProviders/gcp/gcp.component';
import { AzureComponent } from './cloudProviders/azure/azure.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import {  Routes, RouterModule } from '@angular/router';
const appRoutes:Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:loginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    RegisterComponent,
    UserComponent,
    AwsComponent,
    GcpComponent,
    AzureComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
