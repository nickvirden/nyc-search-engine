import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserPageComponent } from './user-page.component';
import { SearchComponent } from '../search/search.component';

import { UsersService } from '../../services/users.service';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { 'hey': 'ho' } }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserPageComponent,
        SearchComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
