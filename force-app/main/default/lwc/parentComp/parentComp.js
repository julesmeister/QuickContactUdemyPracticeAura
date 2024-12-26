import { LightningElement, track } from 'lwc';

export default class ParentComp extends LightningElement {
    @track customMessage = '';

    /**
     * This function is called whenever the user types a new value in the input field.
     * It passes the new value to the child component.
     * @param {Event} event 
     */
    handleMessage(event) {
        this.template.querySelector('c-child-comp').changeMessage(event.target.value);
    }
    
    /**
     * This function is called whenever the user types a new value in the child component's input field.
     * It updates the parent component's message property with the new value.
     * @param {CustomEvent} event 
     */

    // This is not needed because the event listener is declared in the html template.
    // To use this method, we do not need to declare the event listener in the html template.
    // constructor() {
    //     super();
    //     this.template.addEventListener('messagechange', this.handleCustomMessage.bind(this));
    // }

    handleCustomMessage(event) {
        this.customMessage = event.detail;
    }
}