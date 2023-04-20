(function(window, $) {
    let Greeter = function(firstName, lastName, language) {
        // return new Greeter.init(firstName, lastName, language);
    }

    Greeter.init = function(firstName, lastName, language) {
        let self = this;

        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    }
}('window', '$'))
