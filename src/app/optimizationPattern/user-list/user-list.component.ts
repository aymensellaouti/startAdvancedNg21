import {Component, input, output, signal} from '@angular/core';
import {User} from "../users.service";
import { FormsModule } from '@angular/forms';

export const fibonnaci = (n: number): number => {
  if (n==1 || n==0) {
    return 1;
  }
  return fibonnaci(n-1) + fibonnaci(n-2);
}

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    imports: [FormsModule]
})
export class UserListComponent {
  readonly usersCluster = input<string>('');
  readonly users = input<User[]>([]);
  readonly add = output<string>();
  userFullName = signal('');
  addUser() {
    this.add.emit(this.userFullName());
    this.userFullName.set('');
  }
  fibo(n: number): number {
    const fib = fibonnaci(n);
    console.log({n, fib});

    return fib;
  }
}
