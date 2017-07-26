import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getPaginationModel, ITEM_TYPES } from 'ultimate-pagination';

@Component({
  selector: 'mh-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage;
  @Input() totalPages;
  @Output() change = new EventEmitter();
  ITEM_TYPES = ITEM_TYPES;

  constructor() {}

  ngOnInit() {
  }

  getPaginationModel() {
    return getPaginationModel({
      currentPage: this.currentPage,
      totalPages: this.totalPages
    });
  }

  onSelectPage(newPage) {
    if (newPage !== this.currentPage) {
      this.change.next(newPage);
    }
  }

  getItemKey(index, item) {
    return item.key;
  }
}
