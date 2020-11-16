import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './Login/presentation/presentation.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProfileComponent } from './Profile/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileComponent } from './Profile/edit-profile/edit-profile.component';
import { FriendProfileComponent } from './Profile/friend-profile/friend-profile.component';
import { FeedComponent } from './feed/feed.component';
import { MainSearchComponent } from './search/main-search/main-search.component';
import { PublicacionesSearchComponent } from './search/publicaciones-search/publicaciones-search.component';
import { VideojuegosSearchComponent } from './search/videojuegos-search/videojuegos-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatComponent } from './chat/chat.component';
import { GuardAccesGuard } from '../../guard/guard-acces.guard';
import { AdminProfileComponent } from './Profile/admin-profile/admin-profile.component';
import { MatchmakingComponent } from './matchmaking/matchmaking/matchmaking.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    FriendProfileComponent,
    FeedComponent,
    MainSearchComponent,
    PublicacionesSearchComponent,
    VideojuegosSearchComponent,
    NotFoundComponent,
    ChatComponent,
    AdminProfileComponent,
    MatchmakingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [GuardAccesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
