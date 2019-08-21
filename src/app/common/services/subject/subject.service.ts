import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from "../../entities/subject";
import { JournalRecord } from "../../entities/journalRecord";
import { map } from "rxjs/operators";
import { BASE_URL_FOR_NODEJS } from "./../../constants/urls";

@Injectable()
export class SubjectService {
    public subjects: Subject[] = [];

    // tslint:disable-next-line:no-parameter-properties
    constructor(private http: HttpClient) { }

    public getAllSubjects(): Observable<Subject[]> {
        return this.http.get(BASE_URL_FOR_NODEJS + "/subjects").pipe(
            map((subjects: Subject[]) => {
                return subjects;
            }));
    }

    public addSubject(data: any): Observable<Subject> {
        console.log("subject service -> add subject");
        return this.http.post<Subject>(BASE_URL_FOR_NODEJS + "/subjects", data);
    }

    public getRecordsById(typeId: number): Observable<any> {
        return this.http.get(BASE_URL_FOR_NODEJS + "/subjects/" + typeId + "/records").pipe(
            map((data: any) => {
                return data;
            }));
    }

    public updateJournal(typeId: number, records: JournalRecord[]): Observable<any> {
        return this.http.post<JournalRecord[]>(BASE_URL_FOR_NODEJS + "/subjects/" + typeId + "/updateRecords", records).pipe(
            map((data: any) => {
                return data;
            }));
    }

    public getStatisticsSubject(typeId: number): Observable<any> {
        return this.http.get(BASE_URL_FOR_NODEJS + "/subjects/" + typeId + "/statistics").pipe(
            map((data: any) => {
                return data;
            }));
    }
}
