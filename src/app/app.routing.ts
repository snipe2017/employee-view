import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {EmployeeComponent} from '../components/employee/employee.component';
import { UsersComponent} from '../components/users/users.component';
import { LogoutComponent} from '../components/logout/logout.component';
import {AddEmpComponent} from './components/add-emp/add-emp.component';
import {ViewEmpComponent } from './components/view-emp/view-emp.component';
const appRoutes: Routes = [
    { path: '', redirectTo:'dashboard', pathMatch:'full'},
    { path: 'dashboard', component:DashboardComponent },
    { path: 'users', component: UsersComponent},
    { path: 'logout', component: LogoutComponent},
      { path: 'employee', component: EmployeeComponent,
      children: [
        { path: '', redirectTo: 'Add', pathMatch: 'full' },
        { path: 'Add', component: AddEmpComponent, pathMatch:'full'},
        { path: 'view', component: ViewEmpComponent, pathMatch:'full'},
      ]},
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
