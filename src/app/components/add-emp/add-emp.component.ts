import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../.././services/admin.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  employees = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(model){
    // this.employees.push(this.model);
    this.adminService.addEmployee(this.model)
    .subscribe(
      (model) => { console.log(model)
     },
      (error) => console.log(error),
      () => console.log("success")
    );
    this.model ={};
    this.msg="Record is successfully added....."
  } 
}
