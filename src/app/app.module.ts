import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { JsonpService } from './services/jsonp.service';
import { OutroComponent } from './outro/outro.component';
import { OutroSubcompComponent } from './outro-subcomp/outro-subcomp.component';
import { MasterService } from './services/master.service';
import { RecorderComponent } from './recorder/recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    OutroComponent,
    OutroSubcompComponent,
    RecorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    JsonpService,
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
