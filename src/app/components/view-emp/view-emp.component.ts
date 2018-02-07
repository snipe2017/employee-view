import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../.././services/admin.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  employees = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getEmp()
    .subscribe(
      model => this.employees = model
    );
  }

}
