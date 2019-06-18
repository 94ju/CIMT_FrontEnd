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
import { UploadComponent } from './user/upload/upload.component';
import { HomeComponent } from './home/home.component';
import { CloudProvidersComponent } from './cloudProviders/cloudProviders.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:loginComponent},
  {path:'aws',component:AwsComponent},
  {path:'gcp',component:GcpComponent},
  {path:'azure',component:AzureComponent},
  {path:'home',component:HomeComponent},
  {path:'servers',component:CloudProvidersComponent}
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
    AdminUserComponent,
    UploadComponent,
    HomeComponent,
    CloudProvidersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
