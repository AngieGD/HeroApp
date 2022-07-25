import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../heroes/interface/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {
  private baseUrl:string = environment.baseUrl

  constructor(private http: HttpClient) { }

  public getHeroes():Observable<Heroe[]> {
    const url = `${this.baseUrl}/heroes`
    return this.http.get<Heroe[]>(url)
  }
}
