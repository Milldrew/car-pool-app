import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';
  handleThemeChange(isDark: boolean) {
    console.log(isDark, 'form approot');
    let theme;
    if (isDark) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    this.renderer.setAttribute(
      this.document.body,
      'class',
      `mat-typography mat-app-background light ${theme}`
    );
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
}
