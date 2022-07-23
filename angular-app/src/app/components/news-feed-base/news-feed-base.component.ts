import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed-base',
  templateUrl: './news-feed-base.component.html',
  styleUrls: ['./news-feed-base.component.scss'],
})
export class NewsFeedBaseComponent implements OnInit {
  @Input()
  isShowingRequests: any;

  ngAfterContentChecked() {
    console.log('after checked is showing', this.isShowingRequests);
    this.isShowingRequests = this.isShowingRequests;
  }
  constructor() {}

  ngOnInit(): void {}
}
