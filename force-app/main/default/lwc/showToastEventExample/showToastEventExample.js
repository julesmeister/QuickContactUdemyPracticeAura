import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastEventExample extends LightningElement {
    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Contact created successfully',
                variant: 'success' // Corrected variant
            })
        );
    }

    handleError() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: 'Error creating contact',
                variant: 'error' // Corrected variant
            })
        );
    }  

    handleWarning() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Warning',
                message: 'Contact created successfully',
                variant: 'warning' // Corrected variant
            })
        );
    }

    handleInfo() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Info',
                message: 'Contact created successfully',
                variant: 'info' // Corrected variant
            })
        );
    }
}