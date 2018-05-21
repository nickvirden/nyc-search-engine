import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	select: string[] = ['yey'];
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
		let indexOfValue;
		indexOfValue = this.select.indexOf(value);
		this.select.splice(indexOfValue, 1);
	}

	searchCityRecords(paramObject) {
		this.searchService.retrieveData(paramObject)
			.subscribe(response => this.data = response);
	}

}
