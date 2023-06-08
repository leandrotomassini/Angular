import { Component, OnInit, computed, signal } from '@angular/core';

import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';



@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);

  public userWasFound = signal(true);

  public fullName = computed<String>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    return `${this.currentUser()!.first_name} ${this.currentUser()!.last_name}`;
  });

  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {

    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById(id)
      .subscribe({
        next: (user) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: () => {
          this.currentUser.set(undefined);
          this.userWasFound.set(false);
        }
      });
  }


}
