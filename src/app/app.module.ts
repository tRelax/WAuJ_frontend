import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HardwareComponent } from './hardware-component/hardware.component';
import { HardwareDetailComponent } from './hardware-detail/hardware-detail.component';
import { HardwarePriceComponent } from './hardware-price/hardware-price.component';
import { AppRoutingModule } from './app-routing.module';
import { HardwareEditComponent } from './hardware-edit/hardware-edit.component';
import { ReviewComponent } from './review-component/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareComponent,
    HardwareDetailComponent,
    HardwarePriceComponent,
    HardwareEditComponent,
    ReviewComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
