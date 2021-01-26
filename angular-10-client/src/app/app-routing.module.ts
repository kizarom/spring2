import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserListComponent } from '../app/user-list/user-list.component';
import { UserDetailsComponent } from '../app/user-details/user-details.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { MembreDetailsComponent } from './membre-details/membre-details.component';
import { FactureListComponent } from './Facture/facture-list/facture-list.component';
import { CreateFactureComponent } from './Facture/create-facture/create-facture.component';
import { UpdateFactureComponent } from './Facture/update-facture/update-facture.component';
import { FactureDetailsComponent } from './Facture/facture-details/facture-details.component';
import { MembreComponent } from './user/membre/membre.component';
import { ContactComponent } from './user/contact/contact.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { DonateComponent } from './user/donate/donate.component';
import { EventComponent } from './user/event/event.component';
import { DoneComponent } from './user/done/done.component';
import { AboutComponent } from './user/about/about.component';






const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'admin/users', component: UserListComponent},
  {path: 'admin/membres', component: MembreListComponent},
  {path: 'admin/membre-details/:id', component: MembreDetailsComponent},
  {path: 'admin/user-details/:id', component: UserDetailsComponent},
  {path: 'admin/factures', component: FactureListComponent},
  {path: 'admin/create-facture', component: CreateFactureComponent},
  {path: 'admin/update-facture/:id', component: UpdateFactureComponent},
  {path: 'admin/facture-details/:id', component: FactureDetailsComponent},
  {path:'become-member',component:MembreComponent},
  {path:'contact',component:ContactComponent},
  {path:'donate',component:DonateComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'event',component:EventComponent},
  {path:'done',component:DoneComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
