import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'mh-comic-variants',
  templateUrl: './comic-variants.component.html',
  styleUrls: ['./comic-variants.component.css']
})
export class ComicVariantsComponent implements OnInit {
  @Input() variants: [any];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  getComicVariantPath(variant) {
    return ['/comics', this.getComicIdByResourceURI(variant.resourceURI)];
  }

  getComicIdByResourceURI(resourceURI) {
    return resourceURI.match(/\d+$/)[0];
  }
}

