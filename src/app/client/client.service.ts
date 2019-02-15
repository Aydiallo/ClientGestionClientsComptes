import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {API_URLS} from '../config/api.url.config';
import { Client } from '../shared/client';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
     return this.http.get(API_URLS.CLIENTS_URL);
  }

  add(client: Client): Observable<any> {
    return this.http.post(API_URLS.CLIENTS_URL, client);
  }

  update(client: Client): Observable<any> {
    return this.http.put(API_URLS.CLIENTS_URL, client);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(API_URLS.CLIENTS_URL + '/' + id);
  }
}
