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

        // Set the background color directly
        this.template.querySelector('.templateBodyClass').style.backgroundColor = this.color;
    }

    get colorStyle() {
        return `background-color: ${this.color}`;
    }
}