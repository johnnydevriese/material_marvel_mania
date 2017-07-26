import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { CreatorsService } from '../shared/services/creators.service';

@Component({
  selector: 'mh-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.css']
})
export class CreatorDetailsComponent implements OnInit {
  creator;

  constructor(private activatedRoute: ActivatedRoute, private creatorsService: CreatorsService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map((params) => params['id'])
      .switchMap((creatorId) => this.creatorsService.get(creatorId))
      .subscribe((creator) => {
        this.creator = creator;
      });
  }

}
