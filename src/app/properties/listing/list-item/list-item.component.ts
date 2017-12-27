import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../model/property';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input('property') property: Property;

  constructor() { }

  ngOnInit() {
  }

}
