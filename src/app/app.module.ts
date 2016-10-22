import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CollapseDirective } from 'ng2-bootstrap'

import { AppComponent } from './components/app/app.component';
import { HeaderComponent} from './components/header/header.component';

import { AppRouting } from './config/app.routing';

import { HomeModule } from './pages/HomePage/home.module';
import { ProfileModule } from './pages/ProfilePage/profile.module';
import { AddAppModule } from './pages/AddAppPage/addApp.module';
import { ApproveAppModule } from './pages/ApproveApp/approveApp.module';
import { LoginModule } from './pages/LoginPage/login.module';
import { SearchModule } from './pages/SearchPage/search.module';

import { AuthService } from './services/auth.service';
import { enableProdMode } from '@angular/core';

enableProdMode();
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HomeModule,
    ProfileModule,
    AddAppModule,
    ApproveAppModule,
    LoginModule,
    SearchModule
  ],
  providers: [AuthService],
  declarations: [
    HeaderComponent,
    AppComponent,
    CollapseDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
