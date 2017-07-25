import {Component} from '@angular/core';
import {Guest} from './Guest';
import {GuestService} from './guest.service';
/**
 * Created by jtrumpower on 7/10/17.
 */


@Component({
    selector: 'app-directions-component',
    templateUrl: '../../html/directions.component.html',
    styleUrls: ['../../css/directions.component.css']
})
export class DirectionsComponent {
  lat = 40.827023;
  lng = -81.378202;
  zoom = 14;
  address = `2600 Cleveland Avenue Northwest<br>
  Canton, OH 44709`;
  location = 'Malone University';
}
