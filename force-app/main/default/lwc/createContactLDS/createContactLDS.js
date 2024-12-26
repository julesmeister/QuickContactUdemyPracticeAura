import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactLDS extends LightningElement {
    name;
    email;
    phone;

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
                this.name = '';
                this.email = '';
                this.phone = '';
                this.showToast('Success', 'Contact created successfully', 'success');
            })
            .catch(error => {
                console.error('Error creating contact: ' + error.body.message);
                this.showToast('Error', error.body.message, 'error');
            });
    }
}