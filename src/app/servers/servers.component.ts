import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServers = false;
  serverName = '';
  servers = ['server1', 'server2'];
  serverCreationStatus = 'no server is created..!!';
  isServerCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 2000);
  }

  ngOnInit() {}
  onServerCreation() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'now server is created: ' + this.serverName;
  }
  onInputServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
