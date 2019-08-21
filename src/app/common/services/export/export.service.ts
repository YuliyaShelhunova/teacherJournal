import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, last, catchError, retry } from "rxjs/operators";
import { BASE_URL_FOR_NODEJS } from "./../../constants/urls";

@Injectable()
export class ExportService {

    // tslint:disable-next-line:no-parameter-properties
    constructor(private http: HttpClient) { }

    public getFile(type: string): Observable<Object> {
        return this.http.get(BASE_URL_FOR_NODEJS + "/export/" + type);
    }
}
