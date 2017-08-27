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
const core_1 = require("@angular/core");
const contact_service_1 = require("./contact.service");
let ContactsListComponent = class ContactsListComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.contactService.getContactsSlowly()
            .then((contacts) => {
            this.contacts = contacts;
        }).catch(err => {
            console.log(err);
        });
    }
};
ContactsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "contacts-list",
        templateUrl: 'contacts-list.component.html'
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactsListComponent);
exports.ContactsListComponent = ContactsListComponent;
//# sourceMappingURL=contacts-list.component.js.map