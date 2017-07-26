import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-item-name',
  templateUrl: './item-name.component.html',
  styleUrls: ['./item-name.component.css']
})
export class ItemNameComponent implements OnInit {
  @Input() item: any;
  @Input() basePath: string;

  constructor() { }

  ngOnInit() {
  }

  getRoutePath() {
    return [this.basePath, this.getItemIdFromResourceURI()];
  }

  getItemIdFromResourceURI() {
    return this.item.resourceURI.match(/\d+$/)[0];
  }
}
