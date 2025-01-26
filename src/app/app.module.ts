import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import ReactiveFormsModule
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { FeatureJobComponent } from './home/feature-job/feature-job.component';
import { ScrollAnimateDirective } from './scroll-animate.directive';
import { TrustedCompaniesComponent } from './home/trusted-companies/trusted-companies.component';
import { SubscriptionComponent } from './home/subscription/subscription.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollupComponent } from './scrollup/scrollup.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobSearchComponent } from './job-list/job-search/job-search.component';
import { JobFilterComponent } from './job-list/job-filter/job-filter.component';
import { ReminderComponent } from './job-list/reminder/reminder.component';
import { JobListingComponent } from './job-list/job-listing/job-listing.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailsHeaderComponent } from './job-details/job-details-header/job-details-header.component';
import { JobDescriptionComponent } from './job-details/job-description/job-description.component';
import { CompanyInfoSidebarComponent } from './job-details/company-info-sidebar/company-info-sidebar.component';
import { ApplyNowComponent } from './job-details/apply-now/apply-now.component';
import { JobImageComponent } from './job-details/job-image/job-image.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SimilarJobComponent } from './job-details/similar-job/similar-job.component';
import { JobCategoriesComponent } from './job-details/job-categories/job-categories.component';
import { HowWorkComponent } from './home/how-work/how-work.component';
import { NotificationComponent } from './notification/notification.component';
import { CompanyComponent } from './company/company.component';
import { CompanySearchComponent } from './company/company-search/company-search.component';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { MockInterviewComponent } from './mock-interview/mock-interview.component';
import { InterviewHeaderComponent } from './mock-interview/interview-header/interview-header.component';
import { InterviewSidebarComponent } from './mock-interview/interview-sidebar/interview-sidebar.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HeroComponent } from './about/hero/hero.component';
import { TrustComponent } from './about/trust/trust.component';
import { StatsComponent } from './about/stats/stats.component';
import { FeaturesComponent } from './about/features/features.component';
import { GetStartedComponent } from './about/get-started/get-started.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// import { AuthGuard } from './auth.guard'; // Import AuthGuard

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    FeatureJobComponent,
    AboutUsComponent,
    ScrollAnimateDirective,
    TrustedCompaniesComponent,
    SubscriptionComponent,
    FooterComponent,
    ScrollupComponent,
    JobListComponent,
    JobSearchComponent,
    JobFilterComponent,
    ReminderComponent,
    JobListingComponent,
    JobDetailsComponent,
    JobDetailsHeaderComponent,
    JobDescriptionComponent,
    CompanyInfoSidebarComponent,
    ApplyNowComponent,
    JobImageComponent,
    NotFoundComponent,
    PreloaderComponent,
    SimilarJobComponent,
    JobCategoriesComponent,
    HowWorkComponent,
    NotificationComponent,
    CompanyComponent,
    CompanySearchComponent,
    CompanyListingComponent,
    ConfirmationModalComponent,
    ForgetPassComponent,
    SavedJobComponent,
    MockInterviewComponent,
    InterviewHeaderComponent,
    InterviewSidebarComponent,
    ServicesPageComponent,
    HeroComponent,
    TrustComponent,
    StatsComponent,
    FeaturesComponent,
    GetStartedComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [provideClientHydration(), AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
