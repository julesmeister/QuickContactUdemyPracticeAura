import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class CanvasSubscriber extends LightningElement {
    @track color = 'white';
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('changeColor', this.handleChangedColor, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleChangedColor(colorCode) {
        console.log('Received color code:', colorCode);
        this.color = colorCode;
    }

    get colorStyle() {
        return `background-color: ${this.color}`;
    }
}