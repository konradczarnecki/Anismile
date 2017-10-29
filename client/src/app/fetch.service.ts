import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Animal} from "./model/animal.interface";
import {environment} from "../environments/environment";

@Injectable()
export class FetchService {

  constructor(private http: Http) { }

  getAllAnimals(page: number): Promise<Animal[]>{

    return new Promise<Animal[]>(resolve => {
      this.http.get(environment.apiurl + '/animals/get-all?page=' + page).subscribe(response => {
        resolve(response.json().content)
      })
    })
  }

}
