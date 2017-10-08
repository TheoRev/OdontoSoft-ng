import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { PanelModule } from "primeng/primeng";
import { MenuItem } from "primeng/primeng";
import { AutorizationService } from "./services/autorization.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items: MenuItem[];
  isLogin = true;
  router: Router;

  constructor(
    private autorizationService: AutorizationService,
    private _router: Router
  ) {
    this.router = _router;
    this.isLogin = this.autorizationService.login("theo", "ambu");
    // console.log(this.router.url);
  }

  ngOnInit() {
    this.items = [
      { label: "Stats", icon: "fa-bar-chart", routerLink: "/login" },
      { label: "Pacientes", icon: "fa-wheelchair", routerLink: "/patients" },
      { label: "Documentation", icon: "fa-book" },
      { label: "Support", icon: "fa-support" },
      { label: "Social", icon: "fa-twitter" }
    ];
  }
}
