class formSubmit  {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.fomButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
            
        }
    }
     
}