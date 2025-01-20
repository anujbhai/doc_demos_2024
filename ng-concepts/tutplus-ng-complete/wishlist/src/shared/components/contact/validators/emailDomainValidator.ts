import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailDomainValidator (hosts: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();
        // const hosts = ['dctinc.com'];

        if (!value) {
            return null;
        }

        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);

        return matches ? {emailDomainValidator: true} : null;
    }
}
