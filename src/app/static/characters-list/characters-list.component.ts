// import { Component, OnInit } from '@angular/core';
//
// import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
//
// @Component({
//   selector: 'anms-characters-list',
//   templateUrl: './characters-list.component.html',
//   styleUrls: ['./characters-list.component.scss']
// })
// export class CharactersListComponent implements OnInit {
//
//   animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/services/entities.service';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'mh-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [
    {provide: EntitiesService, useClass: CharactersService}
  ]
})
export class CharactersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

