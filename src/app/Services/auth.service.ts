import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'https://your-api-url.com/api';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private readonly apiUrl = 'https://your-api-url.com/api';


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, { email, password })
      .pipe(tap(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  signupStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup/student`, studentData);
  }

  signupTeacher(teacherData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup/teacher`, teacherData);
  }
}