import { Injectable } from '@angular/core';
import { Http} from "@angular/http";
import { environment} from "../../environments/environment";
import { toPromise } from "rxjs/operator/toPromise";

@Injectable()
export class TopService {

  constructor(private http: Http) { }

  getBanner(){
    this.http.get(environment.apiurl).subscribe(image => {

    })
  }

}
