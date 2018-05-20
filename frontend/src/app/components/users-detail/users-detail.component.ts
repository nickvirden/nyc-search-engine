import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';
import { Subject } from 'rxjs';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

	user: any;

	constructor(private usersService: UsersService ) { }

	ngOnInit() {
		this.usersService.getUsers()
			.subscribe(response => {
				this.user = response;
				console.log("response:", this.user);
			})
	}

}
