import {Component} from '@angular/core';
import {Guest} from './Guest';
import {GuestService} from './guest.service';


@Component({
    selector: 'app-guests-component',
    templateUrl: '../../html/guests.component.html',
    styleUrls: ['../../css/guests.component.css']
})
export class GuestsComponent {
    guests: Guest[];

    settings = {
      columns: {
        firstName: {
          title: 'First Name'
        },
        lastName: {
          title: 'Last Name'
        },
        email: {
          title: 'Email'
        },
        eventType: {
          title: 'Attending'
        },
        numberOfGuests: {
          title: 'Guests'
        },
        dietaryRestriction: {
          title: 'Dietary Restrictions'
        }
      }
    };

    constructor(private rsvpService: GuestService) {
        this.getAllGuests();
    }

    getAllGuests() {
        this.rsvpService.getGuests()
            .then(guests => {
                this.guests = guests;
            });
    }
}
