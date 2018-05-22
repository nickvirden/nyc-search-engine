import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit {

	select: string[] = [''];
	where: string[];
	order: string;
	group: string;
	having: string;
	limit: string;
	offset: string;
	paramObject: any = {
		select: this.select,
		where: this.where,
		order: this.order,
		group: this.group,
		having: this.having,
		limit: this.limit,
		offset: this.offset,
	};
	data: any;
	searchCriteria: string[] = [''];

	constructor( private searchService: SearchService ) { }

	ngOnInit() { }

	addToSearchCriteria(value) {
		this.select.push(value);
	}

	removeFromSearchCriteria(value) {
		let indexOfValue = this.select.indexOf(value);
		this.select.splice(indexOfValue, 1);
	}

	searchCityRecords(paramObject) {
		this.searchService.retrieveData(paramObject)
			.subscribe(response => this.data = response);
	}

}
