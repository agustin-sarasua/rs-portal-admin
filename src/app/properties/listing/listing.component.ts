import { Component, OnInit } from '@angular/core';
import { Property } from './../../model/property'
import { PropertyService } from './../../services/property.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  properties: Property[] = [];

  constructor(private _propertyService: PropertyService) { 
    this._propertyService.loadProperties().then(properties => this.properties = properties);
  }

  ngOnInit() {
  }

}
