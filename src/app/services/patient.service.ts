import { Patient } from '../patient/patient';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { Http, Headers } from "@angular/http";

@Injectable()
export class PatientService {
  constructor(private http: Http) { }

  extractData: any;
  handleErrorObservable: any;

  public findAllPatients() {
    const endPoint = "http://localhost:3030/api/patients/";

    const headers = new Headers();
    // headers.append("Access-Control-Allow-Headers", "Content-Type");

    return this.http.get(endPoint, { headers: headers }).map(res => <Patient[]>res.json());
  }

  public createPatient(paciente) {
    const endPoint = "http://localhost:3030/api/crud/patients/";
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    // let options = new RequestOptions({ headers: headers });

    return this.http.post(endPoint, paciente, { headers: headers }).subscribe();
  }
}
