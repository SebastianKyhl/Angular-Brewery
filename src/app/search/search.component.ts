import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, tap, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string = '';
  brews: Object;
  TempBrew: Object;
  customInput: Subject<string> = new Subject();

  searchBox = document.getElementById('search-input');

  keyup$ = fromEvent(this.searchBox, 'keyup');

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.customInput.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(value => {
      console.log(value);
      this._http.getAutocompleteBeer(value).subscribe(data => {
        this.TempBrew = data;
        console.log(this.TempBrew);
      })
    })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.query);
    this._http.getBrew(this.query).subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    })
  }

  inputValueChanged(event) {
    this.customInput.next(event);
  }

}
