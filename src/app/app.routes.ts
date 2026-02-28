import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path: 'signup', component:SignUpComponent},
    {path: 'login', component:LoginComponent},
    {path: 'forgot-password', component:ForgotPasswordComponent},
    {path: '',redirectTo:"signup",  pathMatch: "full"},
];
