import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDepartment } from '../interfaces/departments';


@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  constructor(private _http:HttpClient) { }

  private _dbUrl = 'localhost:4200';

  
}
