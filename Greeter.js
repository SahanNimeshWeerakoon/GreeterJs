(function(global, $) {
    let Greeter = function(firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    }

    let supportedLangs = ['en', 'es'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    }

    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }

    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    // This is where we put the methods we need to use inside the Greeter object
    Greeter.prototype = {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) throw "Invalid language";
        },
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}!`
        },
        formalGreetings: function() {
            return `${formalGreetings[this.language]}, ${this.fullName()}`;
        },
        greet: function(formal) {
            let msg = formal ? this.formalGreetings() : this.greeting();
            if(console) console.log(msg);
            return this;
        },
        log: function() {
            if(console) console.log(`${logMessages[this.language]} : ${this.fullName()}`);
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }
    }

    Greeter.init = function(firstName, lastName, language) {
        let self = this;

        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    }

    // Greeter.init.prototype is returned on Greeter initialization. 
    // Make the Greeter objects's methods available in Greeter initialization ( init method proto == making main obj proto)
    Greeter.init.prototype = Greeter.prototype;

    // Make G$ (like '$' in jquery) available in global method
    global.Greeter = global.G$ = Greeter;
    
}(window, $))
