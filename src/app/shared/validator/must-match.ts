import {AbstractControl, ValidatorFn} from "@angular/forms";

export function mustMatchFn (...args: string[]) : ValidatorFn {
  return (abstractControl: AbstractControl) : { [p: string]: any } | null => {

    // if(!(abstractControl instanceof FormControl))
    //   return null;

    for (let i =0; i < args.length; i++) {
      const formControl = abstractControl.root.get(args[i])
      if(formControl !== null && formControl.value !== abstractControl.value) {
        return {'mustMatch': true}
      }
    }
    return null
  }
}
