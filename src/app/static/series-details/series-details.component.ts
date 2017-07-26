import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'mh-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {
  series;

  constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map((params) => params['id'])
      .switchMap((seriesId) => this.seriesService.get(seriesId))
      .subscribe((series) => {
        this.series = series;
      });
  }

}
