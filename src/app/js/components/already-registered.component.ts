import {Component} from '@angular/core';
import {Guest} from './Guest';
import {GuestService} from './guest.service';


@Component({
  selector: 'app-already-registered-component',
  templateUrl: '../../html/already-registered.component.html',
  styleUrls: ['../../css/already-registered.component.css']
})
export class AlreadyRegisteredComponent {
  guest: Guest = new Guest();
  message: string;

  constructor(private rsvpService: GuestService) {

  }

  checkGuest() {
    this.rsvpService.checkStatus(this.guest).then(message => {
      this.message = message;
    });
  }
}
