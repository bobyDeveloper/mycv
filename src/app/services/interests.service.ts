import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  private apiUrl = 'https://api-cv-angular-service-bobydeveloper.cloud.okteto.net'; 

  constructor(private http: HttpClient) { }

  getInterests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interests`)
      .pipe(
        map((response: any) => response.interests)
      );
  }
}