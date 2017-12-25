import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './properties/listing/listing.component'
import { PublicationsComponent } from './publications/publications.component'

const routes: Routes = [
  { path: 'properties', component: ListingComponent },
  { path: 'publications', component: PublicationsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
