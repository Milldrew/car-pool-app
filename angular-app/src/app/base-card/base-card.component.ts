import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit {
  @Input()
  username: string = 'Bob Smith';
  @Input()
  subName: string = 'is requesting a ride';
  @Input()
  date: string = 'July 22, 2022 9:00 am';
  @Input()
  isRequest: boolean = true;
  @Input()
  seatingAmount: number = 2;
  @Input()
  phoneNumber: undefined | string = '555-555-55555';
  @Input()
  moreInfo: string = 'Here is some more information';
  @Input()
  imgUrl: string = 'http://imgurl.com';
  selectImage() {
    // Add logic for custom image here
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 50) {
      return `url('https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg')`;
    }
    return `url('https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')`;
  }
  imageObject = {
    'background-image': this.selectImage(),
  };
  constructor() {}

  ngOnInit(): void {}
}
