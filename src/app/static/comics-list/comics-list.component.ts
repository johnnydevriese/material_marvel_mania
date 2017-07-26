import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/services/entities.service';
import { ComicsService } from '../shared/services/comics.service';

@Component({
  selector: 'mh-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css'],
  providers: [
    {provide: EntitiesService, useClass: ComicsService}
  ]
})
export class ComicsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
