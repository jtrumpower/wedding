import {Component} from '@angular/core';
import {Guest} from './Guest';
import {GuestService} from './guest.service';


@Component({
    selector: 'app-rsvp-component',
    templateUrl: '../../html/rsvp.component.html',
    styleUrls: ['../../css/rsvp.component.css']
})
export class RSVPComponent {
    guest: Guest = new Guest();
    submitted = false;
    submitting = false;

    constructor(private rsvpService: GuestService) {

    }

    addGuest($event, attending) {
        $event.preventDefault();
        this.submitting = true;
        if (!this.guest.dietaryRestriction || this.guest.dietaryRestriction === '') {
          this.guest.dietaryRestriction = 'None';
        }
        this.guest.attending = attending;
        this.rsvpService.create(this.guest).then(guest => {
            this.submitted = true;
            this.submitting = false;
        });
    }

    onlyNumbers($event) {
      return /\d+/.test($event.key);
    }
}
