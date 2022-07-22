import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './app-bar/app-bar.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { FeedToggleComponent } from './components/feed-toggle/feed-toggle.component';
import { NewsFeedBaseComponent } from './components/news-feed-base/news-feed-base.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    BaseCardComponent,
    FeedToggleComponent,
    NewsFeedBaseComponent,
  ],
  imports: [
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
