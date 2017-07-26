import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/services/entities.service';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'mh-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [
    {provide: EntitiesService, useClass: EventsService}
  ]
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
