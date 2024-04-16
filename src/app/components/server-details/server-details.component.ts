import {Component, Input, OnInit} from '@angular/core';
import {ServerService} from "../../services/server/server.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-server-details',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './server-details.component.html',
  styleUrl: './server-details.component.css'
})
export class ServerDetailsComponent implements OnInit {

  @Input("server")
  server: any;

  playbooks: any[] = [];
  selectedPlaybook: any;

  constructor(
    protected serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.serverService.refreshPlaybookArray();
  }

  runSelectedPlaybook(){
    const host = this.server.ipAddress.replace(/\./g, '-');
    this.serverService.runPlaybook(host, this.selectedPlaybook);
  }
}
