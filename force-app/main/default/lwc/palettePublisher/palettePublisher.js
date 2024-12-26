import { LightningElement, track, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PalettePublisher extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;
    colorCodeOptions = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ];
    changeColor(event) {
        this.color = event.target.value;
    }
    handleChangeColor() {
        console.log('Firing changeColor event with color:', this.color);
        fireEvent(this.pageRef, 'changeColor', this.color);
    }   
}