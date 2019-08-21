import { Component } from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import { Store } from "@ngrx/store";
import * as SubjectAction from "../../../redux/actions/subject.actions";

@Component({
    selector: "subject-rating",
    templateUrl: "./subjectRating.component.html",
    styleUrls: ["./subjectRating.component.less"]
})
export class SubjectRatingComponent {
    public statistics: any = [];
    public nameSubject: string;
    public id: number;

    // tslint:disable-next-line:no-parameter-properties
    constructor(private store: Store<any>, private activateRoute: ActivatedRoute) {
        this.id = Number(activateRoute.snapshot.params.id);
    }

    public ngOnInit(): void {
        this.store.dispatch(new SubjectAction.GetStatisticsSubject(this.id));
        this.store.select("subjects").subscribe
        (data => {
            if (data.statistics) {
                for (let i = 1; i < (data.statistics / 2); i++) {
                    this.statistics.push(i);
                }
                this.nameSubject = data.info.name;
            }
        });
    }
}
