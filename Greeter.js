(function(window, $) {
    let Greeter = function(firstName, lastName, language) {
        // return new Greeter.init(firstName, lastName, language);
    }

    // This is where we put the methods we need to use inside the Greeter object
    Greeter.prototype = {}

    Greeter.init = function(firstName, lastName, language) {
        let self = this;

        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    }

    // Greeter.init.prototype is returned on Greeter initialization. 
    // Make the Greeter objects's methods available in Greeter initialization ( init method proto == making main obj proto)
    Greeter.init.prototype = Greeter.prototype;
}('window', '$'))
