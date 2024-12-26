import { LightningElement, api } from 'lwc';

export default class EmployeeDetail extends LightningElement {
    /**
     * The employee detail object.
     * @type {Object}
     * @prop {string} empName - Employee name.
     * @prop {string} empAddress - Employee address.
     * @default {Object} with empName = 'John Doe' and empAddress = '123 Main St, Anytown, USA'.
     */
    @api empDetail = {
        empName: 'John Doe',
        empAddress: '123 Main St, Anytown, USA',
    }
}