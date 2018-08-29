import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { UsersComponent } from './users/users.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UsersComponent,
    ToggleComponent/*,
    WarningComponent,
    SuccessComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
