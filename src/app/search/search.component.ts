import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string = '';
  brews: Object;


  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.query);
    this._http.getBrew(this.query).subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    })
  }
}
