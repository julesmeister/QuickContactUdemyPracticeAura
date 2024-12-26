import { LightningElement } from 'lwc';

export default class ChildComp2 extends LightningElement {
     // custom event
    handleMessage(event) {
        const customMessage = event.target.value;
        const selectEvent = new CustomEvent('messagechange', { detail: customMessage });
        this.dispatchEvent(selectEvent);
    }
}