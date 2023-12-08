import {Component, OnInit} from '@angular/core';
import {SafePipe} from '../../shared/pipes/safe.pipe';
import {CalendarCardFactoryDirective} from '../../shared/components/cards/calendar-card-factory.directive';
import {getRandomInt} from '../../shared/functoins/random-numbers';
import {AllMedia, Media} from '../../data/media';
import {NgForOf, NgIf} from '@angular/common';
import {SafeYoutubeUrlPipe} from '../../shared/pipes/safe-youtube-url.pipe';
import {SafeUrlPipe} from '../../shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [SafePipe, CalendarCardFactoryDirective, NgIf, NgForOf, SafeYoutubeUrlPipe, SafeUrlPipe],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent implements OnInit {
  headerCard1 = getRandomInt(1, 23);
  headerCard2 = getRandomInt(1, 23);
  cardTitle = 'رسالة ربنا ليك انهاردة';
  allMedia: Media[] = AllMedia;
  cardData!: Media;

  ngOnInit() {
    console.log('-> ngOnInit');
    this.cardData = this.allMedia[getRandomInt(0, this.allMedia.length - 1)];
  }
}
