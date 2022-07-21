import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  isDarkValue: boolean = false;
  @Output() public isDark: EventEmitter<boolean>;
  toggleIsDark() {
    this.isDarkValue = !this.isDarkValue;
    this.isDark.emit(this.isDarkValue);
    console.log(this.isDarkValue);
  }

  constructor() {
    this.isDark = new EventEmitter();
  }

  ngOnInit(): void {}
}
