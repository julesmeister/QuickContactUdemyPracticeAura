import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    // this variable is decorated with @track so that it can be accessed in the html template.
    // when the user types a new value in the input field, the handleNameChange function will be called
    // and the value of this variable will be updated.  This will trigger a re-render of the component
    // and the new value will be displayed on the page.
    @track greeting = '';
    @track age = '';
    @track salary = '';
    @track show = true;

    // this function is called whenever the user types a new value in the input field.
    // The event argument is an object that represents the event that triggered the function call.
    // The target property of the event object is the element that triggered the event,
    // which in this case is the input field.
    // The value property of the event.target object is the value that was entered by the user.
    handleNameChange(event) {
        // update the value of the greeting variable with the new value entered by the user
        this.greeting = event.target.value;
    }

    handleAgeChange(event) {
        this.age = event.target.value;
    }    

    handleSalaryChange(event) {
        this.salary = event.target.value;
    }    

    handleSubmit() {
        this.show = false;
    }
}