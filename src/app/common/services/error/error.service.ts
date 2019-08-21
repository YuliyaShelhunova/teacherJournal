import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ErrorService {

    // tslint:disable-next-line:no-parameter-properties
    constructor(private http: HttpClient) { }

    public static handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            "Something bad happened; please try again later.");
    }
}
