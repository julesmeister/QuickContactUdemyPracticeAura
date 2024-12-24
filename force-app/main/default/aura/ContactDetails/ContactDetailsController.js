({
    locationChange : function(component, event, helper) {
        var params = event.getParams();
        var token = params.token; // Get the token
        console.log("locationChange called with params: ", params); // Log all parameters
    
        // Check if token is a string before using indexOf
        if (typeof token === 'string' && token.indexOf('contact/') === 0) {
            var contactId = token.slice(token.indexOf('/') + 1);
            var action = component.get("c.findById");
            action.setParams({"contactId": contactId});
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set("v.contact", response.getReturnValue());
                }
            });
            $A.enqueueAction(action);
        } else {
            console.error("Token is not a valid string: ", token); // Log an error if token is not valid
        }
    }
})