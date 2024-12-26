import { LightningElement } from 'lwc';

export default class EachContacts extends LightningElement {
    //populate seed contacts
    contacts = [
        { Id: '0031', Name: 'John Doe', Title: 'CEO', Phone: '555-555-1234', Email: 'john.doe@me.com' },
        { Id: '0032', Name: 'Jane Doe', Title: 'CFO', Phone: '555-555-5678', Email: 'jane.doe@me.com' },
        { Id: '0033', Name: 'John Smith', Title: 'CMO', Phone: '555-555-9012', Email: 'john.smith@me.com' },
        { Id: '0034', Name: 'Jane Smith', Title: 'CTO', Phone: '555-555-1111', Email: 'jane.smith@me.com' },
    ];
}