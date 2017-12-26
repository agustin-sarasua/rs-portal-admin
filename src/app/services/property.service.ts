import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Headers } from '@angular/http';

@Injectable()
export class PropertyService {

  constructor(private restService: RestService) { }

  public createProperty (page: Account): Promise<string> {
    let body = JSON.stringify(page, (k,v) => { if(v == null) { return undefined; } else { return v; } } );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.restService.doPost("facebook/v1/page", body, headers, true);
  }
  
}
