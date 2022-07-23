import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card-fab',
  templateUrl: './create-card-fab.component.html',
  styleUrls: ['./create-card-fab.component.scss'],
})
export class CreateCardFabComponent implements OnInit {
  createCard() {
    console.log('hello');
  }
  constructor() {}

  ngOnInit(): void {}
}
