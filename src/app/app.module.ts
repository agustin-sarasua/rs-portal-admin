import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionHeaderComponent } from './action-header/action-header.component';
import { PropertiesComponent } from './properties/properties.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicationsComponent } from './publications/publications.component';
import { ListingComponent } from './properties/listing/listing.component';
import { NewListingComponent } from './properties/new-listing/new-listing.component';
import { ListItemComponent } from './properties/listing/list-item/list-item.component';
import { PropertyService } from './services/property.service';
import { RestService } from './services/rest.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionHeaderComponent,
    PropertiesComponent,
    PublicationsComponent,
    ListingComponent,
    NewListingComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PropertyService, AuthService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
