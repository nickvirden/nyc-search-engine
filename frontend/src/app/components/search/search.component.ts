import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	weather: any;
	searchSubject = new Subject();

	constructor( private searchService: SearchService ) { }

	ngOnInit() {
		// As soon as you subscribe to something, you're talking to an observable
		this.searchSubject
			.pipe(debounceTime(1000))
			.pipe(distinctUntilChanged())
			.subscribe(zip => 
				this.searchService.createAPI(zip)
					.subscribe(response => 
						this.weather = response.json()
					)
			);
	}

	findWeather(zip) {
		// Every time the zipCode changes, the app publishes an event
		this.searchSubject.next(zip);
	}

}
