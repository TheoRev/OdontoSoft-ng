import { Injectable } from "@angular/core";
@Injectable()
export class AutorizationService {
  public login = (useer, password) => {
    console.log("Método de Login");
  };

  constructor() {}
}
