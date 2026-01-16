import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login ',
    component: LoginPageComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailPageComponent,
  },
];
