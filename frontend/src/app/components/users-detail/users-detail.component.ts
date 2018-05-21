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
	userId: number;

	constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute ) { }

	ngOnInit() {
		this.activatedRoute.params.forEach(param => this.userId = parseInt(param.id, 10));
		this.usersService.getUser(this.userId).subscribe(response => {
			this.user = response;
		});
	}

}
