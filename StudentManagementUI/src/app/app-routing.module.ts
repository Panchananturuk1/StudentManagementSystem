import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
// import { StudentAddComponent } from './components/student-add/student-add.component';
// import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add', component: StudentFormComponent },
  { path: 'edit/:id', component: StudentFormComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
