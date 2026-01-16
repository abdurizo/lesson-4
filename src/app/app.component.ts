import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomePageComponent,
    LoginPageComponent,
    UsersPageComponent,
    UserDetailPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson-4';
}
