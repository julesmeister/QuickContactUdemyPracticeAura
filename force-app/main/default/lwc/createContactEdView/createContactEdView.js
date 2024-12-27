import { LightningElement, track  } from 'lwc';

export default class CreateContactEdView extends LightningElement {
    @track recordId;
    createContact(event) {
        console.log('Received event with id:', event.detail.id);
        this.recordId = event.detail.id;
    }
}