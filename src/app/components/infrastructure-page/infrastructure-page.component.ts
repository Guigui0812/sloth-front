import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServerInfosComponent } from '../server-infos/server-infos.component';
import {NgFor, NgIf} from '@angular/common';
import { ServerService } from '../../services/server/server.service';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-infrastructure-page',
  standalone: true,
  imports: [ServerInfosComponent, NgFor, NgIf, FormsModule],
  templateUrl: './infrastructure-page.component.html',
  styleUrl: './infrastructure-page.component.css'
})
export class InfrastructurePageComponent {

  protected _filteredProvider: string = '';


  constructor(
    protected serverService: ServerService,
    ) { }
  @Input() server: any; // Le serveur à afficher

}
