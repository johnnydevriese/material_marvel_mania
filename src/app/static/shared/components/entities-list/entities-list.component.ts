import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../../services/entities.service';

import 'rxjs/add/operator/do';

@Component({
  selector: 'mh-entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.css']
})
export class EntitiesListComponent implements OnInit {
  @Input() title: string;
  entities: any;
  query: string = '';
  page: number = 1;
  perPage: number = 20;
  isLoading: boolean = false;

  constructor(
    private entitiesService: EntitiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .do((params) => {
        this.page = params['p'] ? parseInt(params['p'], 10) : 1;
        this.query = params['q'] || '';
      })
      .switchMap(() => {
        this.isLoading = true;
        return this.entitiesService.getList({
          page: this.page,
          perPage: this.perPage,
          query: this.query
        });
      })
      .subscribe((entities) => {
        this.isLoading = false;
        this.entities = entities;
      });
  }

  getTotalPages() {
    if (this.entities) {
      return Math.ceil(this.entities.data.total / this.perPage);
    }
  }

  onChangePage(newPage) {
    this.router.navigate([{
      p: newPage,
      q: this.query
    }]);
  }

  onSearch(query) {
    this.router.navigate([query ? {q: query} : {} ]);
  }
}
