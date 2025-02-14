import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/Students`;

  // Get all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`)
  }

 addStudent(student: Student): Observable<Student> {
   return this.http.post<Student>(this.baseUrl, student)
  }

  updateStudent(id: number, student: Student ): Observable<Student> {
     return this.http.put<Student>(`${this.baseUrl}/${id}`, student) 
  }
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

}
