import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number; 
  detailedBrew: any;

  constructor(private activatedRoute: ActivatedRoute,
              private _http: HttpService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            console.log(this.id);
            this._http.getDetailedBeer(this.id).pipe(
              map(res => {
                this.detailedBrew = res;
                console.log(this.detailedBrew);
              })
            )
            .subscribe();
          }
        )
  }

}
