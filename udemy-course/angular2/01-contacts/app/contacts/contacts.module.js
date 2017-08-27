"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const contacts_list_component_1 = require("./contacts-list.component");
const common_1 = require("@angular/common");
const contact_routing_module_1 = require("./contact-routing.module");
const contact_detail_component_1 = require("./contact-detail.component");
const contact_service_1 = require("./contact.service");
let ContactsModule = class ContactsModule {
};
ContactsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            contact_routing_module_1.ContactRoutingModule
        ],
        declarations: [
            contacts_list_component_1.ContactsListComponent,
            contact_detail_component_1.ContactDetailComponent
        ],
        exports: [
            contacts_list_component_1.ContactsListComponent
        ],
        providers: [
            contact_service_1.ContactService
        ]
    })
], ContactsModule);
exports.ContactsModule = ContactsModule;
//# sourceMappingURL=contacts.module.js.map