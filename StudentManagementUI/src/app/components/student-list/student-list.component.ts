import { Component, OnInit } from '@angular/core';
// import { Student } from 'src/app/models/Student.model';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) {}
  
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void{
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
  });
  }

  deleteStudent(id?: number): void{
    if(id){
      this.studentService.deleteStudent(id).subscribe(() =>{
        this.students = this.students.filter(s => s.id != id)
      })
    }

  }

  
}
