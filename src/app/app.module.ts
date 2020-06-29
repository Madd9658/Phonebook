import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { appRoutes } from './router.module';
import { RouterModule } from '@angular/router';
import { ShareService } from './share.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, IndexComponent, CreateComponent ],
  bootstrap: [ AppComponent ],
  providers: [ShareService]
})
export class AppModule {}