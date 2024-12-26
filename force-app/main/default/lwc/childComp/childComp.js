import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    message = '';
    @api changeMessage(message) {
        this.message = message.toUpperCase();
    }
}