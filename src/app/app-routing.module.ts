import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full'
  },
  {
    path: 'student-details',
    component: StudentDetailsComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
