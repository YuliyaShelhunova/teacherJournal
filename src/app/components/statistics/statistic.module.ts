import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatisticsComponent } from "./statistics-main/statistics.component";
import { StudentStatisticsComponent } from "./statistics-student/studentStatistics.component";
import { SubjectStatisticsComponent } from "./statistics-subject/subjectStatistics.component";
import { StudentRatingComponent } from "./student-rating/studentRating.component";
import { SubjectRatingComponent } from "./subject-rating/subjectRating.component";

@NgModule({
  declarations: [StatisticsComponent, StudentStatisticsComponent, SubjectStatisticsComponent,
    StudentRatingComponent, SubjectRatingComponent],
  imports: [CommonModule]
})

export class StatisticModule { }
