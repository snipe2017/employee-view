import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../.././services/admin.service';
 
import{model} from '../../../services/model';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  employees = [];
  update:boolean = false;
  errorMessage: any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getEmp()
    .subscribe(
      model => this.employees = model
    );
  }

  editEmployee(employee){
    this.update = true;
    this.adminService.addEmployee = Object.assign({}, employee);
  }

  deleteEmp(empId){
    var ans = confirm("Do you want to delete customer with Id: " + empId);
    // if(ans){
      this.adminService.deleteEmp(empId);
    //    .subscribe(data=> {
    //      var index = this.employees.findIndex(x=>x.empId == empId);
    //      this.employees.splice(index, 1);
    //    }, error=> this.errorMessage = error )
    // }
console.log(empId);
    
}
updateEmployee(){
  this.update = false;
}
}