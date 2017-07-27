import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Guest} from './Guest';
import {GuestService} from './guest.service';
import {DatatableComponent} from '@swimlane/ngx-datatable';


@Component({
    selector: 'app-guests-component',
    templateUrl: '../../html/guests.component.html',
    styleUrls: ['../../css/guests.component.css']
})
export class GuestsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  guests: Guest[];
  temp: Guest[];
  columns = [];
  loadingIndicator = true;

  constructor(private rsvpService: GuestService) {
      this.getAllGuests();
  }

  getAllGuests() {
      this.rsvpService.getGuests()
          .then(guests => {
              this.guests = guests;
              this.temp = guests;
              this.loadingIndicator = false;
          });
  }

  ngOnInit() {
    this.columns = [
      { prop: 'firstName', name: 'First Name', flexGrow: 1 },
      { prop: 'lastName', name: 'Last Name', flexGrow: 1 },
      { prop: 'email', name: 'Email', flexGrow: 1.6 },
      { prop: 'eventType', name: 'Event Type', flexGrow: 1.4 },
      { prop: 'numberOfGuests', name: 'Guests', flexGrow: 0.6 },
      { prop: 'dietaryRestriction', name: 'Dietary Restriction', flexGrow: 1.2 },
      { prop: 'attending', name: 'A', flexGrow: 0.3, cellTemplate: this.editTmpl }
    ];
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      if (d.firstName.toLowerCase().indexOf(val) !== -1 ||
          d.lastName.toLowerCase().indexOf(val) !== -1 ||
          (d.firstName && d.email.toLowerCase().indexOf(val) !== -1) ||
          d.eventType.toLowerCase().indexOf(val) !== -1 ||
          d.numberOfGuests === +val ||
          (d.dietaryRestriction && d.dietaryRestriction.toLowerCase().indexOf(val) !== -1)) {
        return true;
      }
      return !val;
    });

    // update the rows
    this.guests = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
