import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SampleComponent } from './sample/sample.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowSearchComponent } from './pictures/show-search/show-search.component';
import { ViewCollectionComponent } from './collections/view-collection/view-collection.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent },
  { path: 'generic', component: SampleComponent },
  { path: 'search', component: ShowSearchComponent },
  { path: 'mycosmos', component: ViewCollectionComponent},
  
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);