import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, CodemirrorModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
