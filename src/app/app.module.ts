import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { HomeComponent } from './Home/Home.component';
import { ChannelComponent } from './Channel/Channel.component';
import { AboutUsComponent } from './AboutUs/AboutUs.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { ProductStoreComponent } from './ProductStore/ProductStore.component';
import { PlatinumComponent } from './Platinum/Platinum.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChannelComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductStoreComponent,
    PlatinumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'channel', component: ChannelComponent },
      { path: 'about-us', component: AboutUsComponent }
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'product-store', component: ProductStoreComponent },
      { path: 'platinum', component: PlatinumComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
