import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PanelModule } from "primeng/primeng";
import { ButtonModule } from "primeng/primeng";
import { SplitButtonModule } from "primeng/primeng";
import { InputTextModule } from "primeng/primeng";
import { PasswordModule } from "primeng/primeng";
import { TabMenuModule, MenubarModule } from "primeng/primeng";
import { DataTableModule } from "primeng/primeng";
import { PatientComponent } from "./patient/patient.component";
import { AutorizationService } from "./services/autorization.service";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "patients", component: PatientComponent },
  { path: "login", component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    PasswordModule,
    TabMenuModule,
    MenubarModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AutorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
