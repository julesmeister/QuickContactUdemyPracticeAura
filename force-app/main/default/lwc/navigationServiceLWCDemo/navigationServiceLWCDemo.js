import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationServiceLWCDemo extends NavigationMixin(LightningElement) {
    @api recordId;

    /**
     * Navigate to a new record page
     * type: standard__recordPage
     * attributes: recordId, objectApiName, actionName
     */
    navigateToNewRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                'recordId': this.recordId,
                'objectApiName': 'Account',
                'actionName': 'new'
            }
        });
    }

    /**
     * Navigate to an existing record page in edit mode
     * type: standard__recordPage
     * attributes: recordId, objectApiName, actionName
     */
    navigateToEditRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                'recordId': this.recordId,
                'objectApiName': 'Account',
                'actionName': 'edit'
            }
        });
    }

    /**
     * Navigate to an existing record page in view mode
     * type: standard__recordPage
     * attributes: recordId, objectApiName, actionName
     */
    navigateToViewRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                'recordId': this.recordId,
                'objectApiName': 'Account',
                'actionName': 'view'
            }
        });
    }

    /**
     * Navigate to a list view page
     * type: standard__objectPage
     * attributes: objectApiName, actionName
     * state: filterName
     */
    navigateToRecentView() {
        this[NavigationMixin.Navigate]({
            "type": 'standard__objectPage',
            "attributes": {
                'objectApiName': 'Account',
                'actionName': 'list'
            },
            "state": {
                "filterName": "Recent"
            }
        });
    }    

    /**
     * Navigate to a related list view page
     * type: standard__recordRelationshipPage
     * attributes: recordId, objectApiName, relationshipApiName, actionName
     * state: filterName
     */
    navigateToListViewPage() {
        this[NavigationMixin.Navigate]({
            "type": 'standard__recordRelationshipPage',
            "attributes": {
                'recordId': this.recordId,	
                'objectApiName': 'Account',
                'relationshipApiName': 'Contacts',
                'actionName': 'view'
            },
            "state": {
                "filterName": "Recent"
            }
        });
    }   

    /**
     * Navigate to an object page
     * type: standard__objectPage
     * attributes: objectApiName, actionName
     */
    navigateToAccObject() {
        this[NavigationMixin.Navigate]({
            "type": 'standard__objectPage',
            "attributes": {
                "objectApiName": "Account",
                "actionName": "home"
            }
        });
    }

    /**
     * Navigate to an object page
     * type: standard__objectPage
     * attributes: objectApiName, actionName
     */
    navigateToConObject() { 
        this[NavigationMixin.Navigate]({
            "type": 'standard__objectPage',
            "attributes": {
                "objectApiName": "Contact",
                "actionName": "home"
            }
        });
    }

    /**
     * Navigate to a web page
     * type: standard__webPage
     * attributes: url
     */
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": 'standard__webPage',
            "attributes": {
                "url": "https://www.salesforce.com"
            }
        });
    }

    /**
     * Navigate to a named page
     * type: standard__namedPage
     * attributes: pageName
     */
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            "type": 'standard__namedPage',
            "attributes": {
                "pageName": "home"
            }
        });
    }

    /**
     * Navigate to a named page
     * type: standard__namedPage
     * attributes: pageName
     */
    navigateToChatterHomePage() {
        this[NavigationMixin.Navigate]({
            "type": 'standard__namedPage',
            "attributes": {
                "pageName": "chatter"
            }
        });
    }
}