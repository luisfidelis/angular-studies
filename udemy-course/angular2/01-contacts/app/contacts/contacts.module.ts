import { NgModule } from '@angular/core';
import { ContactsListComponent } from './contacts-list.component';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';
@NgModule({
    imports:[
        CommonModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactsListComponent,
        ContactDetailComponent
    ],
    exports: [
       ContactsListComponent 
    ],
    providers:[
        ContactService
    ]
})
export class ContactsModule {

}