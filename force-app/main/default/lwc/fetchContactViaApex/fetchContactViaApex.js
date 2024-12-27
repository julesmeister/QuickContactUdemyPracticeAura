import { LightningElement, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContact';

export default class FetchContactViaApex extends LightningElement {
    contactCount;
    contacts;
    // Used only if we don't need to get the contactCount from the form
    // @wire(getAllContacts) contacts;
    get responseReceived() {
        console.log('contacts:', JSON.stringify(this.contacts, null, 2));
        if (this.contacts && this.contacts.length > 0) {
            console.log('response received');
            return true;
        } else {
            console.log('response not received');
            return false;
        }
    }

    handleContactCountChange(event) {
        this.contactCount = event.target.value;
    }

    fetchContacts() {
        getAllContacts({ count: this.contactCount }).then(result => {
            this.contacts = result;
        }).catch(error => {
            console.error('Error fetching contacts:', error);
        });
    }
}