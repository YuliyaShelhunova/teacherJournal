import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRouterModule } from "./appRouter.module";
import { AppComponent } from "./components/root/app.component";
import { StudentsComponent } from "./components/students/student-table/students.component";
import { StudentModalComponent } from "./components/students/student-form/studentModal.component";
import { ExportComponent } from "./components/export/export.component";
import { SubjectsComponent } from "./components/subjects/subject-list/subjects.component";
import { SubjectAddModalComponent } from "./components/subjects/subject-add-form/subjectAddModal.component";
import { JournalRecordsComponent } from "./components/journalRecords/journalRecords.component";
import { StatisticsComponent } from "./components/statistics/statistics-main/statistics.component";
import { StudentStatisticsComponent } from "./components/statistics/statistics-student/studentStatistics.component";
import { SubjectStatisticsComponent } from "./components/statistics/statistics-subject/subjectStatistics.component";
import { StudentRatingComponent } from "./components/statistics/student-rating/studentRating.component";
import { SubjectRatingComponent } from "./components/statistics/subject-rating/subjectRating.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ReduxModule } from "./redux/module";

@NgModule({
    declarations: [AppComponent, StudentsComponent,
        ExportComponent, StudentModalComponent, SubjectsComponent, SubjectAddModalComponent,
        JournalRecordsComponent, StatisticsComponent, StudentStatisticsComponent,
        SubjectStatisticsComponent, StudentRatingComponent, SubjectRatingComponent, PageNotFoundComponent],
    imports: [BrowserModule, FormsModule, AppRouterModule,
        HttpClientModule, NgbModule, ReduxModule, MatProgressSpinnerModule],
    bootstrap: [AppComponent],
    exports: [StudentModalComponent, SubjectAddModalComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    entryComponents: [StudentModalComponent, SubjectAddModalComponent]
})
export class AppModule { }
