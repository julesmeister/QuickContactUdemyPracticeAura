public class myControllerExtension {

    private final Account account;
    public myControllerExtension(ApexPages.StandardController stdController) {
        this.account = (Account)stdController.getRecord();
    }
    public String greeting() {
        return 'Hello ' + account.Name + '(' + account.Id + ')';
    }
}