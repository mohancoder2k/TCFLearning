import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }

  register(name: string, email: string, password: string, role: string) {
    return this.http.post<any>(`${this.baseUrl}/register`, {
      name,
      email,
      password,
      role
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserName(): string {
    return localStorage.getItem('name') || '';
  }

  setSession(token: string, name: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
}
