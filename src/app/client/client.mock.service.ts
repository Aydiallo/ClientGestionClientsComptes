import { Client } from '../shared/client';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientMockService {

  private  CLIENTS: Client[] = [];

  constructor() {

  }

  public getClients(): Client[] {
    return this.CLIENTS;
  }
}
