import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.components';
import { GroupComponent } from './group/group.component';
import{ FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, MyComponent, GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
