import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries?per_page=3');
  }

  getDetailedBeer(id) {
    return this.http.get('https://api.openbrewerydb.org/breweries/' + id);
  }

  getBrew(query) {
    return this.http.get('https://api.openbrewerydb.org/breweries/search?query=' + query);
  }
}
