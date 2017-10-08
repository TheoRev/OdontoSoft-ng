import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class AutorizationService {
  public login = (user, password) => {
    // console.log("Método de Login");
    console.log(user);
    console.log(password);
    if (user == "theo" && password == "ambu") {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };

  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
}
