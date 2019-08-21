import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as StudentAction from "../../../redux/actions/students.actions";

@Component({
    selector: "student-rating",
    templateUrl: "./studentRating.component.html",
    styleUrls: ["./studentRating.component.less"]
})
export class StudentRatingComponent {
    public statistics: any = [];
    public nameStudent: string;
    public id: number;
    // tslint:disable-next-line:no-parameter-properties
    constructor(private store: Store<any>, private activateRoute: ActivatedRoute) {
        this.id = Number(activateRoute.snapshot.params.id);
    }

    public ngOnInit(): void {
        if (this.id !== 0) {
            this.store.dispatch(new StudentAction.GetStatisticsStudent(this.id));
            this.store.select("students").subscribe
                (data => {
                    if (data.statistics) {
                        for (let i = 1; i < (data.statistics / 2); i++) {
                            this.statistics.push(i);
                        }
                        this.nameStudent = data.info.firstName + " " + data.info.lastName;
                    }
                });
        }
    }
}
