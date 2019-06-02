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

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    RegisterComponent,
    UserComponent,
    AwsComponent,
    GcpComponent,
    AzureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
