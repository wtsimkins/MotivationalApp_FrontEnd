import { Directive } from '@angular/core';

/**
 * Generated class for the UsersDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[users]' // Attribute selector
})
export class UsersDirective {

  constructor() {
    console.log('Hello UsersDirective Directive');
  }

}
