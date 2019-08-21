import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentsComponent } from "./components/students/student-table/students.component";
import { SubjectsComponent } from "./components/subjects/subject-list/subjects.component";
import { JournalRecordsComponent } from "./components/journalRecords/journalRecords.component";
import { ExportComponent } from "./components/export/export.component";
import { StatisticsComponent } from "./components/statistics/statistics-main/statistics.component";
import { StudentStatisticsComponent } from "./components/statistics/statistics-student/studentStatistics.component";
import { SubjectStatisticsComponent } from "./components/statistics/statistics-subject/subjectStatistics.component";
import { StudentRatingComponent } from "./components/statistics/student-rating/studentRating.component";
import { SubjectRatingComponent } from "./components/statistics/subject-rating/subjectRating.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AppComponent } from "./components/root/app.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/students", pathMatch: "full" },
    { path: "", component: AppComponent },
    { path: "statistics", redirectTo: "/statistics/students/", pathMatch: "full" },
    { path: "students", component: StudentsComponent },
    { path: "subjects", component: SubjectsComponent },
    { path: "export", component: ExportComponent },
    {
        path: "statistics", component: StatisticsComponent, children:
            [
                {
                    path: "students", component: StudentStatisticsComponent, children: [
                        { path: ":id", component: StudentRatingComponent}
                    ]
                },
                {
                    path: "subjects", component: SubjectStatisticsComponent, children: [
                        { path: ":id", component: SubjectRatingComponent}
                    ]
                }
            ]
    },
    { path: "subjects/:id/records", component: JournalRecordsComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouterModule { }
