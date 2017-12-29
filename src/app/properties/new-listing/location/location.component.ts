import { Component, OnInit } from '@angular/core';
import {Address} from './../../../model/address'


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  address: Address;

  constructor() { 
    this.address = new Address();
  }

  ngOnInit() {
  }

}
