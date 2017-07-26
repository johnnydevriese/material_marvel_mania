import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-entities-list-item',
  templateUrl: './entities-list-item.component.html',
  styleUrls: ['./entities-list-item.component.css']
})
export class EntitiesListItemComponent implements OnInit {
  @Input() entity;

  constructor() { }

  ngOnInit() {
  }

}
