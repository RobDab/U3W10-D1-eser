import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchSubmitComponent } from './search-submit/search-submit.component';
import { NewsletterSecComponent } from './newsletter-sec/newsletter-sec.component';

import { CreditsComponent } from './credits/credits.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SearchBarComponent,
    SearchInputComponent,
    SearchSubmitComponent,
    NewsletterSecComponent,
    
    
    CreditsComponent,
    NavbarComponent,
    LogoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
