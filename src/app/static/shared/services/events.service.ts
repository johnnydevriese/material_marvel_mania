import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EntitiesService } from './entities.service';

@Injectable()
export class EventsService extends EntitiesService {
  endpointUrl = '//gateway.marvel.com/v1/public/events';
  searchParamName = 'nameStartsWith';

  constructor(http: Http) {
    super(http);
  }
}
