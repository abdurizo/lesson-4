import { Component } from '@angular/core';
import { UserInterface } from '../../models/user-inteface';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
users!:UserInterface[];
constructor(private userService:UsersService){}
}
