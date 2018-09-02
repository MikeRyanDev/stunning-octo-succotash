import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CirclesComponent } from './circles.component';
import { CodeBlockComponent } from './code-block.component';
import { StoreAnimationComponent } from './store-animation.component';

@NgModule({
  declarations: [AppComponent, CirclesComponent, CodeBlockComponent, StoreAnimationComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
