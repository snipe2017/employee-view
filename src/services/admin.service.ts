import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  constructor(private http: Http, private router: Router) { }

addEmployee(model) {
  console.log(model);
  return this.http.post('http://192.168.1.127:8080/DemoAPI/rest/admin/registerEmployee', model
    ).map(res => res.json());
}

getEmp(){
  return this.http.get('http://192.168.1.127:8080/DemoAPI/rest/employee').map(res => res.json());
}

deleteEmp(emailId: any){
  return this.http.delete('http://192.168.1.127:8080/DemoAPI/rest/deleteEmployee' + emailId)
  .map(res => res.json());
  
}
}