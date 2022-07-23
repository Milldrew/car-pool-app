import { Injectable } from '@angular/core';
import { feedCardPayload } from '../../models/feed-card-payload';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  mockOffersPosts: feedCardPayload[] = [
    {
      username: 'Joe',
      date: 'July 24, 2023',
      seatingAmount: 8,
      phoneNumber: '555-555-5555',
      moreInfo: 'You must be ready by 8am',
      userImgUrl: 'img url',
    },
    {
      username: 'Jane',
      date: 'August 24, 2023',
      seatingAmount: 8,
      phoneNumber: '555-555-5555',
      moreInfo: 'more info here',
      userImgUrl: 'img url',
    },
    {
      username: 'username',
      date: 'date',
      seatingAmount: 8,
      phoneNumber: '555-555-5555',
      moreInfo: 'more info here',
      userImgUrl: 'img url',
    },
  ];
  mockRequestPosts: feedCardPayload[] = [
    {
      username: 'Andrew',
      date: 'March 29, 2023',
      seatingAmount: 3,
      phoneNumber: '555-555-5555',
      moreInfo: 'I will be driving a Ford F-150',
      userImgUrl: 'img url',
    },
    {
      username: 'Dave',
      date: 'October 15, 2023',
      seatingAmount: 8,
      phoneNumber: '555-555-5555',
      moreInfo: 'I will be driving a big white Ford van.',
      userImgUrl: 'img url',
    },
    {
      username: 'username',
      date: 'date',
      seatingAmount: 8,
      phoneNumber: '555-555-5555',
      moreInfo: 'more info here',
      userImgUrl: 'img url',
    },
  ];

  constructor() {}
}
