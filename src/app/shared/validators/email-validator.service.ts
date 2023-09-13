import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

// export function emailValidator(control: AbstractControl): Observable<ValidationErrors | null> {
//    const email = control.value;

//    return of({
//       emailTaken: true
//    })
// }

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

   validate(control: AbstractControl): Observable<ValidationErrors | null> {
      const email = control.value;

      const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {
         console.log({email})

         if(email === 'david@hotmail.com'){
            subscriber.next({emailTaken: true})
            subscriber.complete()
         }

         subscriber.next(null)
         subscriber.complete()
      })

      return httpCallObservable;
   }

   // validate(control: AbstractControl): Observable<ValidationErrors | null> {
   //    const email = control.value;

   //    return of({
   //       emailTaken: true
   //    }).pipe(delay(2000))
   // }
   
}