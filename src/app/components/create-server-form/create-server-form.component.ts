import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServerService } from '../../services/server.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-server-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './create-server-form.component.html',
  styleUrl: './create-server-form.component.css'
})
export class CreateServerFormComponent implements OnInit {
  
  serverForm: FormGroup = new FormGroup({});

  constructor(protected serverService: ServerService) { }

  ngOnInit() {

    this.serverForm = new FormGroup({
      'serverName': new FormControl(null, [Validators.required]),
      'os': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'ipAddress': new FormControl(null, [Validators.required]),
      'diskSize': new FormControl(null, [Validators.required]),
      'ram': new FormControl(null, [Validators.required]),
      'cpu': new FormControl(null, [Validators.required]),
    });

  }

  onSubmit() {
    if (!this.serverForm.valid) {
      return;
    }

    this.serverService.addServer(this.serverForm.value);
  }

}
