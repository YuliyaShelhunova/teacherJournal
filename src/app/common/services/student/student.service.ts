import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "../../entities/student";
import { map, last } from "rxjs/operators";
import { BASE_URL_FOR_NODEJS } from "./../../constants/urls";

@Injectable()
export class StudentService {

    // tslint:disable-next-line:no-parameter-properties
    constructor(private http: HttpClient) { }

    public getAllStudents(): Observable<Student[]> {
        return this.http.get(BASE_URL_FOR_NODEJS + "/students")
            .pipe(
                map((students: Student[]) => {
                    return students;
                }));
    }

    public addStudent(data: any): Observable<Student> {
        console.log("student service -> addStudent");
        return this.http.post<Student>(BASE_URL_FOR_NODEJS + "/students", data);
    }

    public getStatisticsStudent(typeId: number): Observable<any> {
        return this.http.get(BASE_URL_FOR_NODEJS + "/students/" + typeId + "/statistics").pipe(
            map((data: any) => {
                return data;
            }));
    }
}
