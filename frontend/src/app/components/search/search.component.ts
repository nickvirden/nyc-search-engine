import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	select: string;
	where: string;
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

	constructor( private searchService: SearchService ) { }

	ngOnInit() { }

	searchCityRecords(paramObject) {
		this.searchService.retrieveData(paramObject)
			.subscribe(response => 
				this.data = response.json()
			);
	}

}
