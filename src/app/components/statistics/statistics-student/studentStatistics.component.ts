import { Component, OnInit, Input } from "@angular/core";
import { Student } from "../../../common/entities/student";
import { Store } from "@ngrx/store";
import * as StudentAction from "../../../redux/actions/students.actions";

@Component({
    selector: "stud-stat",
    templateUrl: "./studentStatistics.component.html",
    styleUrls: ["./studentStatistics.component.less"]
})
export class StudentStatisticsComponent implements OnInit {
    public students: Student[] = [];
    // tslint:disable-next-line:no-parameter-properties
    constructor(private store: Store<any>) { }
    public ngOnInit(): void {
        this.store.dispatch(new StudentAction.GetStudents());
        this.store.select("students").subscribe
            (response => {
                this.students = response.students;
            });
    }
}
