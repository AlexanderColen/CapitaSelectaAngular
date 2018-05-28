import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';

import { GreetingService } from './greeting/greetingService';

const appRoutes: Routes = [
	{ path: '',	redirectTo: 'greeting', pathMatch: 'full' },
  	{ path: 'greeting', component: GreetingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }