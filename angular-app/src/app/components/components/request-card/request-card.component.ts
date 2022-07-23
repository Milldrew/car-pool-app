import { feedCardPayload } from 'src/app/core/models/feed-card-payload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  feedCardData: feedCardPayload = {
    username: 'username',
    date: 'date',
    seatingAmount: 8,
    phoneNumber: '555-555-5555',
    moreInfo: 'more info here',
    userImgUrl: 'img url',
  };
  constructor() {}

  ngOnInit(): void {}
}
