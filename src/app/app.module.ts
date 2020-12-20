import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M49sSQLserviceService } from "./m49s-sqlservice.service";
import { SnmpComynityComponent } from './snmp-comynity/snmp-comynity.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SnmpComynityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [M49sSQLserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
