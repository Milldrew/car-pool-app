import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-toggle',
  templateUrl: './feed-toggle.component.html',
  styleUrls: ['./feed-toggle.component.scss'],
})
export class FeedToggleComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  showingRequests = true;

  toggleFeed() {
    this.showingRequests = !this.showingRequests;
  }
}
