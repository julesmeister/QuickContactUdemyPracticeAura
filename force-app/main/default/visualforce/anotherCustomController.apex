public class NewAndExistingController {
    public Account account {get; set;}
    
    public NewAndExistingController() {
        Id id = ApexPages.currentPage().getParameters().get('id');
        this.account = id == null ? new Account() : [SELECT Id, Phone, Industry FROM Account WHERE Id = :id];
        
    }

    public PageReference save() {
        try {
            upsert(account);
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            return null;
        }
        PageReference redirectSuccess = new ApexPages.StandardController(account).view();
        redirectSuccess.setRedirect(true);
        return redirectSuccess;
    }
}