import { AutorizationService } from "../services/autorization.service";
import { Component } from "@angular/core";
import { PanelModule } from "primeng/primeng";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(private autorizationService: AutorizationService) {}

  login() {
    this.autorizationService.login("user", "pass");
  }
}
