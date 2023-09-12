import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getWorkExperience(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/work-experience`)
      .pipe(
        map((response: any) => response.trabajos)
      );
  }
}