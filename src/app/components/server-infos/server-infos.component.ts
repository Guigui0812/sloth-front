import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ServerService } from '../../services/server/server.service';
import { NgIf } from '@angular/common';
import {ServerConfigureComponent} from '../server-configure/server-configure.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-server-infos',
  standalone: true,
  imports: [NgIf, ServerConfigureComponent],
  templateUrl: './server-infos.component.html',
  styleUrl: './server-infos.component.css'
})
export class ServerInfosComponent {


  @Input("server")
  server: any;

  constructor(
    protected serverService: ServerService,
    ) { }

  /**
   * Delete a server
   * @param serverName
   * @param serverProvider
   */
  deleteServer(serverName: string, serverProvider: string) {
    this.serverService.deleteServers(serverName, serverProvider);
  }


}
