import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'mh-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event;

  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map((params) => params['id'])
      .switchMap((eventId) => this.eventsService.get(eventId))
      .subscribe((event) => {
        this.event = event;
      });
  }

}
