import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IStar } from 'src/app/interface/istar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  private readonly API_URL = 'https://api.api-ninjas.com/v1/stars?name=';

  constructor(private http: HttpClient) {}

  getStarByName(nameStar: string): Observable<IStar[]> {
    const headers = {
      [environment.api_key_star.key]: environment.api_key_star.value,
      'Content-Type': 'application/json',
    };
    return this.http.get<IStar[]>(this.API_URL + nameStar, { headers }).pipe(
      catchError((error) => {
        console.error('Error fetching star data:', error);
        return throwError(error);
      })
    );
  }
}
