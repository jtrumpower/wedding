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
var core_1 = require("@angular/core");
var guest_service_1 = require("./guest.service");
var GuestsComponent = (function () {
    function GuestsComponent(rsvpService) {
        this.rsvpService = rsvpService;
        this.settings = {
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
        this.getAllGuests();
    }
    GuestsComponent.prototype.getAllGuests = function () {
        var _this = this;
        this.rsvpService.getGuests()
            .then(function (guests) {
            _this.guests = guests;
        });
    };
    return GuestsComponent;
}());
GuestsComponent = __decorate([
    core_1.Component({
        selector: 'guests-component',
        templateUrl: '/app/html/guests.component.html',
        styleUrls: ['../../../css/guests.component.css']
    }),
    __metadata("design:paramtypes", [guest_service_1.GuestService])
], GuestsComponent);
exports.GuestsComponent = GuestsComponent;
//# sourceMappingURL=guests.component.js.map