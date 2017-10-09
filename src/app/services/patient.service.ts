import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Http, Headers } from '@angular/http';

@Injectable()
export class PatientService {
  constructor(private http: Http){}

  public findAllPatients() {
    const endPoint = "http://localhost:3030/api/patients/";

    const headers = new Headers();
    // headers.append("Access-Control-Allow-Headers", "Content-Type");
    // headers.append("Access-Control-Allow-Methods", "GET");
    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Content-Type", "application/json");

    return this.http.get(endPoint, { headers: headers }).map(res => res.json());
  }
}
