import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
//import { AboutComponent } from './about/about.component'
import { ContactusComponent }  from './contactus/contactus.component'
import { RegisterComponent } from './register/register.component'
import { NewsComponent } from './news/news.component'
import { ModalComponent } from './modal/modal.component';
import { BoxDirective } from './directives/box.directive';
import { SharedService }  from './shared.service';

import { NewsManagerComponent } from './newsManager/newsManager.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'My Home page' }
  }, {
    path: 'about',
    //component: AboutComponent,
    loadChildren: './about/about.module#AboutModule'
  }, {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'manage-news',
    component: NewsManagerComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  // ,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  declarations: [ AppComponent, HomeComponent, ContactusComponent, RegisterComponent, NewsComponent, ModalComponent, BoxDirective, NewsManagerComponent ],
  providers: [SharedService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
