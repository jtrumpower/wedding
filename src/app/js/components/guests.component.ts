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
  @ViewChild('firstNameTmpl') firstNameTmpl: TemplateRef<any>;
  @ViewChild('lastNameTmpl') lastNameTmpl: TemplateRef<any>;
  @ViewChild('emailTmpl') emailTmpl: TemplateRef<any>;
  @ViewChild('eventTypeTmpl') eventTypeTmpl: TemplateRef<any>;
  @ViewChild('guestsTmpl') guestsTmpl: TemplateRef<any>;
  @ViewChild('dietaryRestrictionTmpl') dietaryRestrictionTmpl: TemplateRef<any>;
  @ViewChild('attendingTmpl') attendingTmpl: TemplateRef<any>;
  @ViewChild('deleteTmpl') deleteTmpl: TemplateRef<any>;
  guests: Guest[];
  temp: Guest[];
  columns = [];
  editing = {};
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
      { prop: 'firstName', name: 'First Name', flexGrow: 1, cellTemplate: this.firstNameTmpl },
      { prop: 'lastName', name: 'Last Name', flexGrow: 1, cellTemplate: this.lastNameTmpl },
      { prop: 'email', name: 'Email', flexGrow: 1.6, cellTemplate: this.emailTmpl },
      { prop: 'eventType', name: 'Event Type', flexGrow: 1.4, cellTemplate: this.eventTypeTmpl },
      { prop: 'numberOfGuests', name: 'Guests', flexGrow: 0.6, cellTemplate: this.guestsTmpl },
      { prop: 'dietaryRestriction', name: 'Dietary Restriction', flexGrow: 1.2, cellTemplate: this.dietaryRestrictionTmpl },
      { prop: 'attending', name: 'A', flexGrow: 0.3, cellTemplate: this.attendingTmpl },
      { name: '', flexGrow: 0.3, cellTemplate: this.deleteTmpl }
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

  updateValue($event, cell, row) {
    this.editing[row.$$index + '-' + cell] = false;
    if ($($event.target).is('input[type=checkbox]')) {
      row[cell] = $($event.target).is(':checked');
    } else {
      row[cell] = $event.target.value;
    }
    this.rsvpService.update(row).then(() => {
      if ($($event.target).is('input[type=checkbox]')) {
        this.guests[row.$$index][cell] = $($event.target).is(':checked');
      } else {
        this.guests[row.$$index][cell] = $event.target.value;
      }
    });
  }

  deleteRow(row) {
    this.rsvpService.delete(row).then(() => {
      console.log(row.id + ' deleted');
      for (let i = 0; i < this.guests.length; i++) {
        const guest = this.guests[i];
        if (guest.id === row.id) {
          this.guests.splice(i, 1);
          break;
        }
      }
    });
  }
}
