import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './properties/listing/listing.component'
import { NewListingComponent } from './properties/new-listing/new-listing.component'
import { PublicationsComponent } from './publications/publications.component'

const routes: Routes = [
  { path: 'properties', component: ListingComponent },
  { path: 'properties/create', component: NewListingComponent },
  { path: 'publications', component: PublicationsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
