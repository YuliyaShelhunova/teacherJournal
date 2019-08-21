import { Component, OnInit } from "@angular/core";
import { Subject } from "../../../common/entities/subject";
import { Store } from "@ngrx/store";
import * as SubjectAction from "../../../redux/actions/subject.actions";

@Component({
    selector: "subj-stat",
    templateUrl: "./subjectStatistics.component.html",
    styleUrls: ["./subjectStatistics.component.less"]
})

export class SubjectStatisticsComponent implements OnInit {
    public subjects: Subject[] = [];
    // tslint:disable-next-line:no-parameter-properties
    constructor(private store: Store<any>) { }
    public ngOnInit(): void {
        this.store.dispatch(new SubjectAction.GetSubjects());
        this.store.select("subjects").subscribe
            (response => {
                this.subjects = response.subjects;
            });
    }
}
