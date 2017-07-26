import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-comic-creators',
  templateUrl: './comic-creators.component.html',
  styleUrls: ['./comic-creators.component.css']
})
export class ComicCreatorsComponent implements OnInit {
  @Input() creators: any;

  constructor() { }

  ngOnInit() {
  }

}
