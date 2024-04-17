import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ServerService } from '../../services/server/server.service';
import { NgIf } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-server-infos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './server-infos.component.html',
  styleUrl: './server-infos.component.css'
})
export class ServerInfosComponent {


  @Input("server")
  server: any;

  constructor(
    protected serverService: ServerService,
    protected router: Router
    ) { }

  /**
   * Delete a server
   * @param serverName
   * @param serverProvider
   */
  deleteServer(serverName: string, serverProvider: string) {
    this.serverService.deleteServers(serverName, serverProvider);
  }

  configureServer(serverId: string) {
    this.router.navigate(['/configure', serverId]);
  }


}
