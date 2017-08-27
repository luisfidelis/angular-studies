import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';
import { ContactDetailComponent } from './contact-detail.component';

const contactRoutes: Routes = [
    {
        path: 'contact',
        component: ContactsListComponent
    },
    {
        path: 'contact/new',
        component: ContactDetailComponent
    },
    {
        path: 'contact/new/:id',
        component: ContactDetailComponent
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(contactRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class ContactRoutingModule {}