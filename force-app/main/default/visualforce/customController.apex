public class AccountCustomController {
    private final Account account;
    
    public AccountCustomController() {
        this.account = [SELECT Id, Name, Site FROM Account WHERE Id = :ApexPages.currentPage().getParameters().get('id')];
    }

    public Account getAccount() {
        return this.account;
    }

    public PageReference saveTheRecord() {
        update account;
        return null;
    }

}