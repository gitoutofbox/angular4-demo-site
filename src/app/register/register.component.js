"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(fb) {
        this.fb = fb;
        this.registerForm = this.fb.group({
            email: ['', forms_1.Validators.required, forms_1.Validators.email],
            passwords: this.fb.group({
                password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), this.onPasswordChange])],
                confirmPassword: ['', forms_1.Validators.required]
            }, {
                validator: this.confirmPasswordCheck
            }),
            name: ['', forms_1.Validators.required, forms_1.Validators.minLength(5)],
            phone: ['', forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10), forms_1.Validators.pattern('[0-9]*')],
            about: []
        });
        this.passwordStrength = { oneSmallLetter: false, 'oneCapsLetter': false, 'oneNumber': false, 'oneSpecial': false };
    }
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.registerForm);
    };
    ;
    RegisterComponent.prototype.onPasswordChange = function (c) {
        if (!c || typeof (c.value) == 'undefined') {
            return null;
        }
        var password = c.value;
        var oneSmallLetterRegex = /^(?=.*[a-z])/;
        var oneCapslLetterRegex = /^(?=.*[A-Z])/;
        var oneNuberLetterRegex = /^(?=.*[0-9])/;
        var oneSpecialLetterRegex = /^(?=.*[!@#\$%\^&\*])/;
        var oneSmallLetter = oneSmallLetterRegex.test(password);
        var oneCapsLetter = oneCapslLetterRegex.test(password);
        var oneNumber = oneNuberLetterRegex.test(password);
        var oneSpecial = oneSpecialLetterRegex.test(password);
        if (!oneSmallLetter || !oneCapsLetter || !oneNumber || !oneSpecial) {
            return { passwordStrength: true };
        }
    };
    ;
    RegisterComponent.prototype.checkPasswordStrength = function () {
        var password = this.registerForm.value.passwords.password;
        var oneSmallLetterRegex = /^(?=.*[a-z])/;
        var oneCapslLetterRegex = /^(?=.*[A-Z])/;
        var oneNuberLetterRegex = /^(?=.*[0-9])/;
        var oneSpecialLetterRegex = /^(?=.*[!@#\$%\^&\*])/;
        this.passwordStrength.oneSmallLetter = oneSmallLetterRegex.test(password);
        this.passwordStrength.oneCapsLetter = oneCapslLetterRegex.test(password);
        this.passwordStrength.oneNumber = oneNuberLetterRegex.test(password);
        this.passwordStrength.oneSpecial = oneSpecialLetterRegex.test(password);
    };
    RegisterComponent.prototype.confirmPasswordCheck = function (c) {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { passwordMatch: true };
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: './register.template.html',
        styleUrls: ['./register.style.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map