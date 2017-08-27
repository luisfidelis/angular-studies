import { Injectable } from '@angular/core';
import { CONTACTS } from './contacts-mock';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
    
    getContacts(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
    }

    getContactsSlowly(): Promise<Contact[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve,3000);
        }).then(() => this.getContacts());
    }
}