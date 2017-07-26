import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EntitiesService } from './entities.service';

@Injectable()
export class SeriesService extends EntitiesService {
  endpointUrl = '//gateway.marvel.com/v1/public/series';
  searchParamName = 'titleStartsWith';

  constructor(http: Http) {
    super(http);
  }
}
