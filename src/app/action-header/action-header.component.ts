import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.css']
})
export class ActionHeaderComponent implements OnInit {

  @Input('url') url: string;
  @Input('action') action: string;

  constructor() { }

  ngOnInit() {
  }

}
