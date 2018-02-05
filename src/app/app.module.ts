import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminService} from '../services/admin.service'
import { AppComponent } from './app.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { UsersComponent} from '../components/users/users.component';
import { LogoutComponent} from '../components/logout/logout.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    UsersComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
