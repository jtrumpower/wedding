import { Observable, Subscription } from 'rxjs/Rx';
import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-countdown-component',
    templateUrl: '../../html/countdown.component.html'
})
export class CountdownComponent implements OnInit, OnDestroy {

    private future: Date;
    private futureString: string;
    private diff: number;
    private $counter: Observable<number>;
    private subscription: Subscription;
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    constructor(elm: ElementRef) {
        this.futureString = elm.nativeElement.getAttribute('inputDate');
    }

    dhms(t: number) {
        this.days = Math.floor(t / 86400);
        t -= this.days * 86400;
        this.hours = Math.floor(t / 3600) % 24;
        t -= this.hours * 3600;
        this.minutes = Math.floor(t / 60) % 60;
        t -= this.minutes * 60;
        this.seconds = t % 60;
    }


    ngOnInit() {
        this.future = new Date(this.futureString);
        this.$counter = Observable.interval(1000).map((x) => {
            this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });

        this.subscription = this.$counter.subscribe((x) => this.dhms(this.diff));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
