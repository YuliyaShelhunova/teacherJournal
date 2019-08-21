import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HelpersService } from "../../common/helpers/helpers";
import { JournalRecord } from "../../common/entities/journalRecord";
import { Store } from "@ngrx/store";
import * as RecordAction from "../../redux/actions/record.actions";
import { Subject } from "../../common/entities/subject";

@Component({
    selector: "journal-records",
    templateUrl: "journalRecords.component.html",
    styleUrls: ["./journalRecords.component.less"],
    providers: [HelpersService]
})

export class JournalRecordsComponent implements OnInit {
    private records: any = [];
    private nameSubject: string;
    private teacher: string;
    private id: number;
    private dates: string[] = [];
    private loading: boolean;
    // tslint:disable-next-line:no-parameter-properties
    constructor(private store: Store<any>, private activateRoute: ActivatedRoute, private helpers: HelpersService) {
        this.id = activateRoute.snapshot.params.id;
    }

    // tslint:disable-next-line:typedef
    public ngOnInit() {
        this.store.dispatch(new RecordAction.GetRecords(this.id));
        this.store.select("records").subscribe(data => {
            console.log("Subject Table -> getRecordsById" + data);
            if (data.records) {
                this.records = this.mappingData(data.records, this);
                this.teacher = data.info.teacher;
                this.nameSubject = data.info.name;
            } else {
                console.log("ERROR IN GETTING RECORDS!!!! " + data);
            }
        });
    }

    public mappingData(data: JournalRecord[], that: any): any[] {
        for (let i = 0; i < data.length; i++) {
            if (data[i].markOnDate) {
                const marks: number[] = [];
                data[i].markOnDate = new Map(data[i].markOnDate);
                data[i].markOnDate.forEach(function (value: any, key: any): void {
                    marks.push(value);
                    if (that.dates.indexOf(key) === -1) {
                        that.dates.push(key);
                    }
                });
                data[i].averageMark = that.calculateAverage(marks);
            }
        }
        data.map((element) => {
            this.dates.forEach((date) => {
                if (element.markOnDate && !element.markOnDate.has(date)) {
                    element.markOnDate.set(date, undefined);
                }
            });
        });
        return data;
    }

    public addColumn(): void {
        this.helpers.addColumnInTable();
    }
    public saveTable(teacherName: string): void {
        this.loading = true;
        let data: JournalRecord[] = []; // for sending
        this.records.forEach(function (element: JournalRecord): void {
            if (element.isChanged) {
                // that.validationRecords(element.markOnDate);
                data.push(element);
                element.isChanged = false;
            }
        });
        this.store.dispatch(new RecordAction.SaveRecords(this.id, data));
        setTimeout(() => {
            this.loading = false;
        },         1000);
    }

    public validationRecords(pair: any): boolean {
        // while for value
        if (pair && pair.value > 0 && pair.value <= 10) {
            return true;
        }
        // ToDo: validation for date
    }

    public calculateAverage(marks: number[]): number {
        return (marks.reduce((average, mark) => average + mark, 0)) / marks.length;
    }

    public updateAverage (record: JournalRecord, pair: any): void {
        const marks: number[] = [];
        if (this.validationRecords(pair)) {
            record.markOnDate.set(pair.key, pair.value);
            record.isChanged = true;
            record.markOnDate.forEach(function (value: any): void {
                if (value) { marks.push(value); }
            });
            record.averageMark = this.calculateAverage(marks);
        } else {
            this.records.invalid = true;
        }
    }
}
