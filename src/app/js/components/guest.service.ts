import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Guest} from './Guest';


@Injectable()
export class GuestService {
    private guestsUrl = 'http://jtrumpower.com:8080/wedding-service/guests';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getGuests(): Promise<Guest[]> {
        return this.http.get(this.guestsUrl)
            .toPromise()
            .then(response =>  response.json() as Guest[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getGuest(id: number): Promise<Guest> {
        const url = `${this.guestsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Guest)
            .catch(this.handleError);
    }

    update(guest: Guest): Promise<Guest> {
        const url = `${this.guestsUrl}/${guest.id}`;
        return this.http
            .put(url, JSON.stringify({
                firstName: guest.firstName,
                lastName: guest.lastName,
                email: guest.email,
                eventType: guest.eventType,
                numberOfGuests: guest.numberOfGuests,
                dietaryRestriction: guest.dietaryRestriction,
                attending: guest.attending
            }), {headers: this.headers})
            .toPromise()
            .then(() => guest)
            .catch(this.handleError);
    }

    checkStatus(guest: Guest): Promise<string> {
        const url = `${this.guestsUrl}/status`;
        return this.http
          .post(url, JSON.stringify({
            firstName: guest.firstName,
            lastName: guest.lastName
          }), {headers: this.headers})
          .toPromise()
          .then((res: any) => {
            console.log(res);
            return res._body;
          })
          .catch(this.handleError);
    }

    create(guest: Guest): Promise<Guest> {
        return this.http
            .post(this.guestsUrl, JSON.stringify({
                firstName: guest.firstName,
                lastName: guest.lastName,
                email: guest.email,
                eventType: guest.eventType,
                numberOfGuests: guest.numberOfGuests,
                dietaryRestriction: guest.dietaryRestriction,
                attending: guest.attending
            }), {headers: this.headers})
            .toPromise()
            .then((res) => {
                guest = res.json() as Guest;

                return guest;
            })
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.guestsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
