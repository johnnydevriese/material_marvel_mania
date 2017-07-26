// import { NgModule } from '@angular/core';
//
// import { SharedModule } from '@app/shared';
//
// import { StaticRoutingModule } from './static-routing.module';
// import { AboutComponent } from './about/about.component';
// import { FeaturesComponent } from './features/features.component';
// import { CharactersListComponent } from './characters-list/characters-list.component';
// import { EntitiesListComponent } from './shared/components/entities-list/entities-list.component';
//
// @NgModule({
//   imports: [
//     SharedModule,
//     StaticRoutingModule
//   ],
//   declarations: [
//     AboutComponent,
//     FeaturesComponent,
//     CharactersListComponent,
//     EntitiesListComponent
//   ]
// })
// export class StaticModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

// import { AppComponent } from './app.component';
// import { routing, appRoutingProviders} from './app.routing';
import { CharactersService, ComicsService, CreatorsService, EventsService, SeriesService } from './shared';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { AssociatedItemsComponent } from './shared/components/associated-items/associated-items.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ThumbnailComponent } from './shared/components/thumbnail/thumbnail.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicDatesComponent } from './shared/components/comic-dates/comic-dates.component';
import { LinksListComponent } from './shared/components/links-list/links-list.component';
import { ComicPricesComponent } from './shared/components/comic-prices/comic-prices.component';
import { ComicCreatorsComponent } from './shared/components/comic-creators/comic-creators.component';
import { ComicVariantsComponent } from './shared/components/comic-variants/comic-variants.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { EntitiesListComponent } from './shared/components/entities-list/entities-list.component';
import { EntitiesListItemComponent } from './shared/components/entities-list-item/entities-list-item.component';
import { ItemNameComponent } from './shared/components/item-name/item-name.component';
import { CreatorsListComponent } from './creators-list/creators-list.component';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

@NgModule({
  declarations: [
    AboutComponent,
    FeaturesComponent,
    // AppComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    PaginationComponent,
    ThumbnailComponent,
    AssociatedItemsComponent,
    ComicsListComponent,
    ComicDetailsComponent,
    ComicDatesComponent,
    LinksListComponent,
    ComicPricesComponent,
    ComicCreatorsComponent,
    ComicVariantsComponent,
    NavigationComponent,
    EntitiesListComponent,
    EntitiesListItemComponent,
    ItemNameComponent,
    CreatorsListComponent,
    CreatorDetailsComponent,
    EventsListComponent,
    EventDetailsComponent,
    SeriesListComponent,
    SeriesDetailsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StaticRoutingModule
    // routing
  ],
  providers: [
    // appRoutingProviders,
    CharactersService,
    ComicsService,
    CreatorsService,
    EventsService,
    SeriesService
  ],
  // bootstrap: [AppComponent]
})
export class StaticModule { }
