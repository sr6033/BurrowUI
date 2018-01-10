import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCommonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClusterDisplayListComponent } from './components/cluster-display-list/cluster-display-list.component';
import { ClusterDisplayComponent } from './components/cluster-display/cluster-display.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConsumerDisplayListComponent } from './components/selector/consumer/consumer-display-list/consumer-display-list.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TopicDisplayListComponent } from './components/selector/topic/topic-display-list/topic-display-list.component';
import { TopicViewComponent } from './components/topic-view/topic-view.component';
import { ROUTES } from './routes/routes';
import { BurrowService } from './services/burrow.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavigationComponent,
    TopicViewComponent,
    ClusterDisplayComponent,
    ClusterDisplayListComponent,
    SelectorComponent,
    ConsumerDisplayListComponent,
    TopicDisplayListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCommonModule
  ],
  providers: [
    BurrowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
