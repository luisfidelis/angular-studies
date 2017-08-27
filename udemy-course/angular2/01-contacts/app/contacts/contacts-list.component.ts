import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
    moduleId: module.id,
    selector: "contacts-list",
    templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

    contacts: Contact[];

    constructor(private contactService: ContactService) {}

    ngOnInit(): void {
        this.contactService.getContactsSlowly()
            .then((contacts: Contact[]) => {
                this.contacts = contacts;  
            }).catch(err => {
                console.log(err);
            });
    }
}