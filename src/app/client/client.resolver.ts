

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ClientService } from './client.service';
import { Client } from '../shared/client';

@Injectable()
export class ClientResolver implements Resolve<any> {

  constructor(private clientService: ClientService) {
  }
  resolve() {
return this.clientService.getAll();
  }
}
