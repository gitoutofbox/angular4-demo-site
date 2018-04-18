import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IpasswordStrength } from '../interfaces/passwordStrength.interface';

@Component({
    selector: 'register',
    templateUrl: './register.template.html',
    styleUrls: ['./register.style.css']
})

export class RegisterComponent {
    private submitted: boolean;
    //private passwordStrength: Object = {oneSmallLetter: false, 'oneCapsLetter': false, 'oneNumber': false, 'oneSpecial': false};
    private passwordStrength: IpasswordStrength;
    constructor(private fb: FormBuilder) {
        this.passwordStrength = {oneSmallLetter: false, 'oneCapsLetter': false, 'oneNumber': false, 'oneSpecial': false};
    }
    private registerForm = this.fb.group({
        email: ['',Validators.required, Validators.email],
        passwords: this.fb.group({
            password: ['',Validators.compose([Validators.required, Validators.minLength(8),  this.onPasswordChange])],
            confirmPassword: ['',Validators.required]
        }, {
            validator: this.confirmPasswordCheck
        }),
        name: ['', Validators.required, Validators.minLength(5)],
        phone: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')],
        about: []
    });
   

    onSubmit(){
        this.submitted = true;
        console.log(this.registerForm)
    };

    onPasswordChange(c: FormControl) {
        if(!c || typeof(c.value) == 'undefined') { return null;}
       let password = c.value;
        var oneSmallLetterRegex = /^(?=.*[a-z])/;
        var oneCapslLetterRegex = /^(?=.*[A-Z])/;
        var oneNuberLetterRegex = /^(?=.*[0-9])/;
        var oneSpecialLetterRegex = /^(?=.*[!@#\$%\^&\*])/;
        
      
        let oneSmallLetter = oneSmallLetterRegex.test(password);
        let oneCapsLetter = oneCapslLetterRegex.test(password);
        let oneNumber = oneNuberLetterRegex.test(password);
        let oneSpecial = oneSpecialLetterRegex.test(password);
    
         if(!oneSmallLetter || !oneCapsLetter || !oneNumber || !oneSpecial) {
            return {passwordStrength: true};
        }
        
    };
    checkPasswordStrength() {
        let password = this.registerForm.value.passwords.password;
        var oneSmallLetterRegex = /^(?=.*[a-z])/;
        var oneCapslLetterRegex = /^(?=.*[A-Z])/;
        var oneNuberLetterRegex = /^(?=.*[0-9])/;
        var oneSpecialLetterRegex = /^(?=.*[!@#\$%\^&\*])/;
        
        this.passwordStrength.oneSmallLetter = oneSmallLetterRegex.test(password);
        this.passwordStrength.oneCapsLetter = oneCapslLetterRegex.test(password);
        this.passwordStrength.oneNumber = oneNuberLetterRegex.test(password);
        this.passwordStrength.oneSpecial = oneSpecialLetterRegex.test(password);
    
    }
    confirmPasswordCheck(c: FormControl) {
        if (c.get('password').value     !== c.get('confirmPassword').value) {
            return {passwordMatch: true};
        }
    }
}