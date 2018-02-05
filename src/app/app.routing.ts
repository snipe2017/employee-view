import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {EmployeeComponent} from '../components/employee/employee.component';
import { UsersComponent} from '../components/users/users.component';
import { LogoutComponent} from '../components/logout/logout.component';

const appRoutes: Routes = [
    { path: '', redirectTo:'dashboard', pathMatch:'full'},
    { path: 'dashboard', component:DashboardComponent },
      { path: 'employee', component: EmployeeComponent},
      { path: 'users', component: UsersComponent},
      { path: 'logout', component: LogoutComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {}
