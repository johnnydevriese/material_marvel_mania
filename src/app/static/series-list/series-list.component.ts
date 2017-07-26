import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/services/entities.service';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'mh-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
  providers: [
    {provide: EntitiesService, useClass: SeriesService}
  ]
})
export class SeriesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
