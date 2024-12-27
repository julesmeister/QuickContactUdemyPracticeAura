public with sharing class ContactManager {
    public ContactManager() {

    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact() {
        System.debug('Entering ContactManager.getContact()');
        List<Contact> contacts = [
            SELECT Id, LastName, Phone FROM Contact LIMIT 20];
        System.debug('Contacts retrieved: ' + contacts);
        return contacts;
    }
}