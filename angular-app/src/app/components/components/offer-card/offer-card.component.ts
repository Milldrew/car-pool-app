import { feedCardPayload } from '../../../core/models/feed-card-payload';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit {
  feedCardData: feedCardPayload = {
    username: 'username',
    date: 'date',
    seatingAmount: 8,
    phoneNumber: '555-555-5555',
    moreInfo: 'more info here',
    userImgUrl: 'img url',
  };

  constructor() {}
  @Input()
  postPayload: feedCardPayload;

  ngOnInit(): void {}
}
