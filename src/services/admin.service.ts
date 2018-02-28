import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Headers, RequestOptions} from '@angular/http';
import {model} from '../services/model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

  constructor(private http: Http, private router: Router) { }

addEmployee(model) {
  console.log(model);
  return this.http.post('http://192.168.1.137:8101/DemoAPI/rest/admin/registerEmployee', model
    ).map(res => res.json());
}

getEmp(){
  return this.http.get('http://192.168.1.137:8101/DemoAPI/rest/employee').map(res => res.json());
}

deleteEmp(empId){
  console.log(empId);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  headers.append('empId', empId);
    return this.http.delete('http://192.168.1.137:8101/DemoAPI/rest/deleteemp/', options)
      .map(response => response.json().event)
      .catch(this.handleErrors);
}
private handleErrors (error: Response | any) {
  return Observable.throw(error.json().message || 'backend server error');
}
}