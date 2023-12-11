import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './asociation/home/home.component';
import { AboutUsComponent } from './asociation/about-us/about-us.component';
import { NoticesComponent } from './asociation/notices/notices.component';
import { QuestionsComponent } from './asociation/questions/questions.component';
import { CardNoticesComponent } from './asociation/notices/card-notices/card-notices.component';
import { ModalCompleteComponent } from './asociation/notices/modal-complete/modal-complete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NoticesComponent,
    QuestionsComponent,
    CardNoticesComponent,
    ModalCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
