import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

	constructor(private httpClient: HttpClient) { }

	retrieveData(paramObject) {
		return this.httpClient.get(`https://data.cityofnewyork.us/resource/`);
	}
}