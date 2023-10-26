import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../model/Offer";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent {

  constructor(private httpClient: HttpClient) {
  }
  getOffers() : void {
    this.httpClient.get<Offer[]>("http://localhost:8080/offers")
      .subscribe({
        next: value => {
          console.log(value)
        },
        error: err => {
          console.log("Error" + err)
        }
      }
      )
  }
}
