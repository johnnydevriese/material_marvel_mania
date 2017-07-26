import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'mh-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character;

  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map((params) => params['id'])
      .switchMap((characterId) => this.charactersService.get(characterId))
      .subscribe((character) => {
        this.character = character;
      });
  }

}
