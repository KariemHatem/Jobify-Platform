import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyNowComponent } from './job-details/apply-now/apply-now.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationComponent } from './notification/notification.component';
import { CompanyComponent } from './company/company.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MockInterviewComponent } from './mock-interview/mock-interview.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-pass', component: ForgetPassComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'job-list', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard] },
  { path: 'saved-job', component: SavedJobComponent, canActivate: [AuthGuard] },
  {
    path: 'services-page',
    component: ServicesPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mock-interview',
    component: MockInterviewComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'notification',
    component: NotificationComponent,
    canActivate: [AuthGuard],
  },
  { path: 'apply-now', component: ApplyNowComponent, canActivate: [AuthGuard] },
  {
    path: 'job-details',
    component: JobDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'apply-now', component: ApplyNowComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
