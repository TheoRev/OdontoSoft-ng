import { PatientService } from "../services/patient.service";
import { FormControl } from "@angular/forms";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Patient } from "./patient";

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
  patients: Patient[];
  display: boolean = false;
  accion: string;

  constructor(private http: Http, private patientService: PatientService) {
    this.doFindAllPatients();
  }

  newPatient() {
    this.display = true;
    this.accion = "NUEVO";
  }

  modifyPatient() {
    this.display = true;
    this.accion = "MODIFICAR";
  }

  doFindAllPatients() {
    this.patientService.findAllPatients().subscribe(
      data => (this.patients = data),
      // patients => (this.Patient = patients),
      error => console.log(error),
      () => console.log("Finished")
    );

    // this.patients = this.getData;;
    console.log(this.patients);
  }
}
