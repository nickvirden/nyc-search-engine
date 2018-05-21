import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

	constructor(private http: Http) { }

	retrieveData(paramObject) {
		return this.http.get(`https://data.cityofnewyork.us/resource/`);
	}
}