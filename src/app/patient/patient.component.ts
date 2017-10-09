import { PatientService } from "../services/patient.service";
import { FormControl } from "@angular/forms";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.css"]
})
export class PatientComponent {
  title = "Lista de Pacientes";
  result: Observable<any>;
  private searchField: FormControl;
  getData: string;

  constructor(private http: Http, private patientService: PatientService) {}

  doFindAllPatients() {
    this.patientService
      .findAllPatients()
      .subscribe(
        data => (this.getData = JSON.stringify(data)),
        error => console.log(error),
        () => console.log("Finished")
      );

    console.log(this.getData);
  }
}
