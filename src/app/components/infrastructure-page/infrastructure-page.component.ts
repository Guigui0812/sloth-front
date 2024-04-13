import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServerInfosComponent } from '../server-infos/server-infos.component';
import { NgFor } from '@angular/common';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-infrastructure-page',
  standalone: true,
  imports: [ServerInfosComponent, NgFor],
  templateUrl: './infrastructure-page.component.html',
  styleUrl: './infrastructure-page.component.css'
})
export class InfrastructurePageComponent {

  constructor(protected serverService: ServerService) { }
  @Input() server: any; // Assure-toi que le serveur est passé en input
  @Output() closeRequest = new EventEmitter();
  
  close() {
    this.closeRequest.emit();
  }
}
