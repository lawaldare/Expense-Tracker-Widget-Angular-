import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ExpenseTrackerWidgetComponent } from './expense-tracker-widget/expense-tracker-widget.component'
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('app-expense-tracker-widget', myElement);
  }
}
