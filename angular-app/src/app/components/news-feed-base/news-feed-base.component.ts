import { Component, Input, OnInit } from '@angular/core';
import { feedCardPayload } from 'src/app/core/models/feed-card-payload';
import { PostsService } from 'src/app/core/services/http/posts.service';

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
  offers: feedCardPayload[];
  requests: feedCardPayload[];
  constructor(private posts: PostsService) {
    this.offers = this.posts.mockOffersPosts;
    this.requests = this.posts.mockRequestPosts;
  }

  ngOnInit(): void {}
}
