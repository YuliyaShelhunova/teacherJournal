import { NgModule } from "@angular/core";
import { SubjectsComponent } from "./subject-list/subjects.component";
import { SubjectAddModalComponent } from "./subject-add-form/subjectAddModal.component";

@NgModule({
  declarations: [SubjectsComponent, SubjectAddModalComponent],
  exports: [SubjectAddModalComponent],
  entryComponents: [SubjectAddModalComponent]
})

export class SubjectModule { }
