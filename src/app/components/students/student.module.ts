import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentsComponent } from "./student-table/students.component";
import { StudentModalComponent } from "./student-form/studentModal.component";

@NgModule({
    declarations: [StudentsComponent, StudentModalComponent],
    imports: [CommonModule],
    exports: [StudentModalComponent],
    entryComponents: [StudentModalComponent]
  })

export class StudentModule { }
