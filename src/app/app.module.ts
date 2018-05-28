import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';

import { ExpenditureService } from './expenditure/expenditureService';

const appRoutes: Routes = [
	{ path: '',	redirectTo: 'expenditures', pathMatch: 'full' },
	{ path: 'expenditures', component: ExpenditureComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenditureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExpenditureService],
  bootstrap: [AppComponent]
})
export class AppModule { }