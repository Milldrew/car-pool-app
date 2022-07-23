import { feedCardPayload } from 'src/app/core/models/feed-card-payload';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  feedCardData: feedCardPayload;

  @Input()
  postPayload: feedCardPayload;

  constructor() {}

  ngOnInit(): void {}
}
