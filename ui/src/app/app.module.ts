import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ROUTES } from './routes/routes';
import { NavigationComponent } from './components/navigation/navigation.component';

// Material
import {MatCardModule, MatGridListModule, MatToolbarModule} from '@angular/material';
import { TopicViewComponent } from './components/topic-view/topic-view.component';
import { ConsumerViewComponent } from './components/consumer-view/consumer-view.component';
import { ClusterDisplayComponent } from './components/cluster-display/cluster-display.component';
import { ClusterDisplayListComponent } from './components/cluster-display-list/cluster-display-list.component';
import { SelectorComponent } from './components/selector/selector.component';
import {BurrowService} from './services/burrow.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavigationComponent,
    TopicViewComponent,
    ConsumerViewComponent,
    ClusterDisplayComponent,
    ClusterDisplayListComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [
    BurrowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
