import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feed-toggle',
  templateUrl: './feed-toggle.component.html',
  styleUrls: ['./feed-toggle.component.scss'],
})
export class FeedToggleComponent implements OnInit {
  @Output()
  isShowingRequests: EventEmitter<boolean>;
  constructor() {
    this.isShowingRequests = new EventEmitter();
  }
  ngOnInit(): void {}
  showingRequests = true;

  toggleFeed() {
    this.showingRequests = !this.showingRequests;
    this.isShowingRequests.emit(this.showingRequests);
  }
}
