import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';
import { Subject } from 'rxjs';

import { SearchComponent } from '../search/search.component';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

	user: any;
	userId: number;

	constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute ) { }

	ngOnInit() {
		this.activatedRoute.params.forEach(param => this.userId = parseInt(param.id, 10));
		this.usersService.getUser(this.userId).subscribe(response => {
			this.user = response;
		});	
	}

}
