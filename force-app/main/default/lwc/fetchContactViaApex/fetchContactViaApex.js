import { LightningElement, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContact';

export default class FetchContactViaApex extends LightningElement {
    @wire(getAllContacts) contacts;
    get responseReceived() {
        // check if the contacts variable has been populated
        // this.contacts will be an object with data and error properties
        // if the data property is not null, then the response has been received
        console.log('contacts:', JSON.stringify(this.contacts, null, 2));
        if (this.contacts && this.contacts.data) {
            console.log('response received');
            return true;
        }
        // if the data property is null, the response has not been received
        console.log('response not received');
        return false;
    }
}