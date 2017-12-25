import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component'
import { PublicationsComponent } from './publications/publications.component'

const routes: Routes = [
  { path: 'properties', component: PropertiesComponent },
  { path: 'publications', component: PublicationsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
