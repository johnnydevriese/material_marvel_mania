import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {
  @Input() links: [any];

  constructor() { }

  ngOnInit() {
  }

  getLinkLabelByType(linkType: string) {
    switch (linkType) {
      case 'detail': return 'Detail';
      case 'purchase': return 'Purchase';
      case 'reader': return 'Reader';
      case 'inAppLink': return 'In App Link';
      case 'wiki': return 'Wiki';
      case 'comiclink': return 'Comic Link';
      default: return linkType;
    }
  }
}
