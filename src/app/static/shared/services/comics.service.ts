import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { EntitiesService } from './entities.service';
import { isValidDate } from '../utils';

@Injectable()
export class ComicsService extends EntitiesService {
  endpointUrl = '//gateway.marvel.com/v1/public/comics';
  searchParamName = 'titleStartsWith';

  constructor(http: Http) {
    super(http);
  }

  get(id) {
    return super.get(id).map((comic) => {
      return Object.assign({}, comic, {
        dates: comic.dates.filter(dateItem => isValidDate(dateItem.date))
      });
    });
  }
}
