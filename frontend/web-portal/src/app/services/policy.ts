import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Policy { policyId?: string; title:string; description?:string; ownerId?:string; reviewCycleDays?:number; status?:string; }

@Injectable({ providedIn: 'root' })
export class PolicyService {
  private api = 'https://localhost:7243/api/v1/policies'; // dev URL, update when deployed
  constructor(private http: HttpClient) {}
  list(): Observable<Policy[]> { return this.http.get<Policy[]>(this.api); }
  create(p: Policy) { return this.http.post<Policy>(this.api, p); }
  update(id:string, p: Policy) { return this.http.put(`${this.api}/${id}`, p); }
  delete(id:string) { return this.http.delete(`${this.api}/${id}`); }
} 
