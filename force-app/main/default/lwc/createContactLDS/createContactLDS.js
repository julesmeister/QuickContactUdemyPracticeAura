import { LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

export default class CreateContactLDS extends LightningElement {
    name;
    email;
    phone;

    recordId;
    contactName = '';
    contactEmail = '';
    contactPhone = '';

    /**
     * This wire service fetches the contact record when the recordId changes.
     * The fetched fields are LastName, Email, and Phone.
     * @param {Object} contact - The result from the wire service.
     * @property {Error} contact.error - The error if the record is not found
     * @property {Object} contact.data - The record data if found
     */
    @wire(getRecord, { recordId: '$recordId', fields: ['Contact.LastName', 'Contact.Email', 'Contact.Phone'] })
    contact({ error, data }) {
        console.log('Fetching contact for recordId:', this.recordId);
        if (error) {
            console.error('Error fetching contact:', error);
        } else if (data) {
            console.log('Fetched contact data:', data);
            this.contactName = data.fields.LastName.value;
            this.contactEmail = data.fields.Email.value;
            this.contactPhone = data.fields.Phone.value;
        }
    }

    contactNameChangeHandler(event) {
        this.name = event.target.value;
    }    

    contactEmailChangeHandler(event) {
        this.email = event.target.value;
    }

    contactPhoneChangeHandler(event) {
        this.phone = event.target.value;
    }

    saveContact() {
        // Create the fields object with the values the user entered
        const fields = {
            LastName: this.name,
            Email: this.email,
            Phone: this.phone
        };

        // Create the record input object with the fields and the api name of the object
        const recordInput = { apiName: 'Contact', fields };

        // Call the createRecord method with the record input to create the contact
        createRecord(recordInput)
            .then(result => {
                console.log('Contact created with ID: ' + result.id);
                this.recordId = result.id;
                this.name = '';
                this.email = '';
                this.phone = '';
                // this.showToast('Success', 'Contact created successfully', 'success');
            })
            .catch(error => {
                console.error('Error creating contact: ' + error.body.message);
                // this.showToast('Error', error.body.message, 'error');
            });
    }
}