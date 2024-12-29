public class OpportunityListController {
    public ApexPages.StandardSetController opps {
        get {
            if(opps == null) {
                opps = new ApexPages.StandardSetController(Database.getQueryLocator('SELECT StageName, Name, Amount FROM Opportunity'));
            }
            return opps;
        }
        set;
    }

    public List<Opportunity> getOpportunities() {
        return (List<Opportunity>)opps.getRecords();
    }
}