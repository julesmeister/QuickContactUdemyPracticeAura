public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findAll() {
        return [SELECT Id, FirstName, Phone FROM Contact LIMIT 10];
    }

    // find contact by name
    @AuraEnabled(cacheable=true)
    public static List<Contact> findByName(String name) {
        String nameLike = '%' + name + '%';
        return [SELECT Id, FirstName, Phone FROM Contact WHERE Name LIKE :nameLike LIMIT 10];
    }

    // find by id
    @AuraEnabled(cacheable=true)
    public static Contact findById(Id contactId) {
        return [SELECT Id, FirstName, Phone, MobilePhone, Account.Name FROM Contact WHERE Id = :contactId];
    }
}