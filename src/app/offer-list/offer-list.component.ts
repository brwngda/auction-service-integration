import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../model/Offer";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent {
  offerList: Offer[] = []
  columnList: string[] = [
    'offer-id-col',
    'offer-productId-col',
    'offer-productName-col',
    'offer-description-col',
    'offer-productCondition-col',
    'offer-productCategory-col',
    'offer-purchaseNotes-col',
    'offer-price-col',
    'offer-promoted-col',
    'offer-location-col',
    'offer-paymentMethod-col',
    'offer-createdAt-col',
    'offer-finishedAt-col',
    'offer-userEntity-col',
  ]

  constructor(private httpClient: HttpClient) {
    this.getOffers()
  }
  getOffers() : void {
    this.httpClient.get<Offer[]>("http://localhost:8080/offers")
      .subscribe({
        next: value => {
          console.log(value)

          this.offerList = value
        },
        error: err => {
          console.log("Error" + err)
        }
      }
      )
  }
}
