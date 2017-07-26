import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ComicsService } from '../shared/services/comics.service';

@Component({
  selector: 'mh-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {
  comic;

  constructor(private activatedRoute: ActivatedRoute, private comicsService: ComicsService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map((params) => params['id'])
      .switchMap((comicId) => this.comicsService.get(comicId))
      .subscribe((comic) => {
        this.comic = comic;
      });
  }

}
