import { AbstractControl, FormControl } from '@angular/forms';

interface ValidatorResult {
    [key: string]: boolean
};

export function isEmail(control: AbstractControl): ValidatorResult | boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(control.value) ? true : { invalidemail: true };
}


/***
 *  Password Valiators
 */
export function matchPasswordValidator(control: FormControl): ValidatorResult | boolean {
    if (control.parent) {
        const password = control.parent.controls['password'].value;
        const repeatPassword = control.value;
        return password === repeatPassword ? true : { mismatch: true };
    }
    return null;
}
