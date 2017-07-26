import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-comic-dates',
  templateUrl: './comic-dates.component.html',
  styleUrls: ['./comic-dates.component.css']
})
export class ComicDatesComponent implements OnInit {
  @Input() dates: [any];

  constructor() { }

  ngOnInit() {
  }

  getDateLabelByType(dateType) {
    switch (dateType) {
      case 'onsaleDate': return 'On-sale date';
      case 'focDate': return 'FOC date';
      case 'unlimitedDate': return 'Unlimited date';
      case 'digitalPurchaseDate': return 'Digital purchase date';
      default: return dateType;
    }
  }

}
