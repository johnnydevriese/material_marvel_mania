import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-comic-variants',
  templateUrl: './comic-variants.component.html',
  styleUrls: ['./comic-variants.component.css']
})
export class ComicVariantsComponent implements OnInit {
  @Input() variants: [any];

  constructor() { }

  ngOnInit() {
  }

  getComicVariantPath(variant) {
    return ['/comics', this.getComicIdByResourceURI(variant.resourceURI)];
  }

  getComicIdByResourceURI(resourceURI) {
    return resourceURI.match(/\d+$/)[0];
  }
}
