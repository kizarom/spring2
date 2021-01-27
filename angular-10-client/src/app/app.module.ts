import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MembreListComponent } from './membre/membre-list/membre-list.component';
import { MembreDetailsComponent } from './membre/membre-details/membre-details.component';
import { UpdateMembreComponent } from './membre/update-membre/update-membre.component';
import { FactureListComponent } from './Facture/facture-list/facture-list.component';
import { FactureDetailsComponent } from './Facture/facture-details/facture-details.component';
import { UpdateFactureComponent } from './Facture/update-facture/update-facture.component';
import { CreateFactureComponent } from './Facture/create-facture/create-facture.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { DonateComponent } from './user/donate/donate.component';
import { DoneComponent } from './user/done/done.component';
import { EventComponent } from './user/event/event.component';
import { FooterComponent } from './user/footer/footer.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { HeaderComponent } from './user/header/header.component';
import { MembreComponent } from './user/membre/membre.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    UserListComponent,
    UserDetailsComponent,
    SearchfilterPipe,
    MembreListComponent,
    MembreDetailsComponent,
    UpdateMembreComponent,
    FactureListComponent,
    FactureDetailsComponent,
    UpdateFactureComponent,
    CreateFactureComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    DoneComponent,
    EventComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    MembreComponent,
    AdhesionComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
