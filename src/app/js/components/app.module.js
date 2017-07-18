"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var home_header_component_1 = require("./home-header.component");
var rsvp_component_1 = require("./rsvp.component");
var schedule_component_1 = require("./schedule.component");
var home_component_1 = require("./home.component");
var couple_component_1 = require("./couple.component");
var countdown_component_1 = require("./countdown.component");
var guest_service_1 = require("./guest.service");
var guests_component_1 = require("./guests.component");
var ng2_smart_table_1 = require("ng2-smart-table");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            ng2_smart_table_1.Ng2SmartTableModule
        ],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, home_header_component_1.HomeHeaderComponent, couple_component_1.CoupleComponent, rsvp_component_1.RSVPComponent, schedule_component_1.ScheduleComponent, countdown_component_1.CountdownComponent, guests_component_1.GuestsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            guest_service_1.GuestService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map