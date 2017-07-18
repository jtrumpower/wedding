"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Rx_1 = require("rxjs/Rx");
var core_1 = require("@angular/core");
var CountdownComponent = (function () {
    function CountdownComponent(elm) {
        this.futureString = elm.nativeElement.getAttribute('inputDate');
    }
    CountdownComponent.prototype.dhms = function (t) {
        var days, hours, minutes, seconds;
        this.days = Math.floor(t / 86400);
        t -= this.days * 86400;
        this.hours = Math.floor(t / 3600) % 24;
        t -= this.hours * 3600;
        this.minutes = Math.floor(t / 60) % 60;
        t -= this.minutes * 60;
        this.seconds = t % 60;
        return [
            days + 'd',
            hours + 'h',
            minutes + 'm',
            seconds + 's'
        ].join(' ');
    };
    CountdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.future = new Date(this.futureString);
        this.$counter = Rx_1.Observable.interval(1000).map(function (x) {
            _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });
        this.subscription = this.$counter.subscribe(function (x) { return _this.message = _this.dhms(_this.diff); });
    };
    CountdownComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CountdownComponent;
}());
CountdownComponent = __decorate([
    core_1.Component({
        selector: 'countdown-component',
        template: "\n        <div>\n            {{days}} Days\n        </div>\n        <div>\n            {{hours}} Hours\n        </div>\n        <div>\n            {{minutes}} Minutes\n        </div>\n        <div>\n            {{seconds}} Seconds\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CountdownComponent);
exports.CountdownComponent = CountdownComponent;
//# sourceMappingURL=countdown.component.js.map