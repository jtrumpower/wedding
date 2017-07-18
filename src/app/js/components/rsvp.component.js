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
var Guest_1 = require("./Guest");
var guest_service_1 = require("./guest.service");
/**
 * Created by jtrumpower on 7/10/17.
 */
var RSVPComponent = (function () {
    function RSVPComponent(rsvpService) {
        this.rsvpService = rsvpService;
        this.guest = new Guest_1.Guest();
        this.submitted = false;
    }
    RSVPComponent.prototype.addGuest = function () {
        var _this = this;
        this.rsvpService.create(this.guest).then(function (guest) {
            _this.submitted = true;
        });
    };
    return RSVPComponent;
}());
RSVPComponent = __decorate([
    core_1.Component({
        selector: 'rsvp-component',
        templateUrl: '/app/html/rsvp.component.html'
    }),
    __metadata("design:paramtypes", [guest_service_1.GuestService])
], RSVPComponent);
exports.RSVPComponent = RSVPComponent;
//# sourceMappingURL=rsvp.component.js.map