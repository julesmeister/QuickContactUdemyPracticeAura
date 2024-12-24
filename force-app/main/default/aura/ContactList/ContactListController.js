({
    doInit : function(component, event, helper) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    searchKeyChange : function(component, event, helper) {
        var searchKey = event.getParam("searchKey");
        var action = component.get("c.findByName");
        action.setParams({"name": searchKey});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})