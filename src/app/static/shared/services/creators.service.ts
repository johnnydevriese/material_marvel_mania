import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EntitiesService } from './entities.service';

@Injectable()
export class CreatorsService extends EntitiesService {
  endpointUrl = '//gateway.marvel.com/v1/public/creators';
  searchParamName = 'nameStartsWith';

  constructor(http: Http) {
    super(http);
  }
}
