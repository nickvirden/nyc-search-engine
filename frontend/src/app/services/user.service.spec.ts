// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { UsersService } from './users.service';
import { User } from './types/user';

describe('UsersService', () => {
    let service: UsersService;
    let httpMock: HttpTestingController;
    let dummyUsers: User[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations:[],
          imports: [
            HttpClientTestingModule
          ],
          providers: [
            UsersService
          ]
        })
        .compileComponents();

        service = TestBed.get(UsersService)
        httpMock = TestBed.get(HttpTestingController);
        
        this.dummyUsers = [
	        {
	        	id: 1,
	            userName: 'number',
	            firstName: 'string',
	            lastName: 'string'
	        }
        ];
    }));

    it('getUsers() should return success', async(() => {
        service.getUsers()
        .subscribe(res => {
        // When observable resolves, result should match test data
          expect(res).toEqual(this.dummyUsers);
          expect(res.length).toBe(1);
        });
		
		// The following `expectOne()` will match the request's URL.    
        let mock = httpMock.expectOne('/api/users');

        // Assert that the request is a GET.
        expect(mock.request.method).toBe("GET");
        
        // Respond with mock data, causing Observable to resolve.
  		// Subscribe callback asserts that correct data was returned.
        mock.flush(this.dummyUsers);
        
        // Finally, assert that there are no outstanding requests.
        httpMock.verify();
    }));

    it('addNewUser() should return success', async(() => {
        service.addNewUser(this.dummyUsers[0])
        .subscribe(res => {
          expect(res).toEqual(this.dummyUsers[0]);
        });
    
        let mock = httpMock.expectOne('/api/users');
        expect(mock.request.method).toBe("POST");
        mock.flush(this.dummyUsers[0]);
        
        httpMock.verify();
    }));

    it('deleteUser() should return success', async(() => {
        service.deleteUser(this.dummyUsers[0].id)
        .subscribe(res => {
            expect(res).toBeDefined();
        });
        
        // The following `expectOne()` will match the request's URL.    
        let mock = httpMock.expectOne('/api/users/1');

        // Assert that the request is a DELETE.
        expect(mock.request.method).toBe("DELETE");
        
        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        mock.flush(this.dummyUsers[0]);
        
        // Finally, assert that there are no outstanding requests.
        httpMock.verify();
    }));


    afterEach(() => {
    	httpMock.verify();
    });

});
