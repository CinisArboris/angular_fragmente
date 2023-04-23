import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStar } from 'src/app/interface/istar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  private readonly API_URL = 'https://api.api-ninjas.com/v1/stars?name=';

  constructor(private http: HttpClient) {}

  getStarByName(name: string): Observable<IStar[]> {
    const headers = { [environment.api_key_star.key]: environment.api_key_star.value };
    return this.http.get<IStar[]>(this.API_URL + name, { headers });
  }
}
