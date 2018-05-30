import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DebtComponent } from './debt/debt.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';

import { DebtService } from './service/debtService';
import { ExpenditureService } from './service/expenditureService';

const appRoutes: Routes = [
	{ path: '',	redirectTo: 'expenditures', pathMatch: 'full' },
  { path: 'expenditures', component: ExpenditureComponent },
  { path: 'debts', component: DebtComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DebtComponent,
    ExpenditureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DebtService, ExpenditureService],
  bootstrap: [AppComponent]
})
export class AppModule { }