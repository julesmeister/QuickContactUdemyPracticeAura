import { LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    empDetails = [
        {
            empName: 'John Doe',
            empAddress: '123 Main St, Anytown, USA',
        },
        {
            empName: 'Jane Smith',
            empAddress: '456 Elm St, Anytown, USA',
        },
        {
            empName: 'Bob Johnson',
            empAddress: '789 Oak St, Anytown, USA',
        },
        {
            empName: 'Alice Brown',
            empAddress: '321 Pine St, Anytown, USA',
        },
    ];
}