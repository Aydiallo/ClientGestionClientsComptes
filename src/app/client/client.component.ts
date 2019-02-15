import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {Client} from '../shared/client';
import { ClientService } from './client.service';
import { ClientMockService } from './client.mock.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

   clients: Client[];

   clientForm: FormGroup;

   operation = 'add';

   selectedClient: Client;

  ngOnInit() {
    this.initClient();
    this.clients = this.route.snapshot.data.clients;
  }

  constructor(private clientService: ClientService, private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.clientForm = this.fb.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        telephone: ['', Validators.required]
      }
    );
  }

  loadClients() {
    this.clientService.getAll().subscribe(
      data => {this.clients = data; },
      error => {console.log('An error was occured'); },
      () => { console.log('loading clients was done'); }
    );
  }

  ajouterClient() {
    const p = this.clientForm.value;
    this.clientService.add(p).subscribe(
      res => {
        this.loadClients();
      }
    );
  }

  updateClient() {

    this.clientService.update(this.selectedClient).subscribe(
      res => {
        this.initClient();
        this.loadClients();
      }
    );
  }

  deleteClient() {
    this.clientService.delete(this.selectedClient.id).subscribe(
      res => {
        this.initClient();
        this.loadClients();
      }
    );
  }

  initClient() {
    this.selectedClient = new Client();
    this.createForm();
  }
}
