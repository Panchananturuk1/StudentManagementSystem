import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: Student = { name: '', age: undefined, email: '', course: '' };
  isEditMode = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.studentService.getStudent(+id).subscribe(data => {
        this.student = data;
      });
    }
  }

  submitForm(): void {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student.id!, this.student).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
