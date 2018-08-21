import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServers = false;
  serverName = '';
  serverCreationStatus = 'no server is created..!!';
  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onServerCreation() {
    this.serverCreationStatus = 'now server is created: ' + this.serverName;
  }
  onInputServerName(event: Event) {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
