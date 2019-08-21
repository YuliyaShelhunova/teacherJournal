import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { StudentService } from "../../../common/services/student/student.service";
import { Student } from "../../../common/entities/student";
import { Store } from "@ngrx/store";
import * as StudentAction from "../../../redux/actions/students.actions";

@Component({
    selector: "ngbd-modal-content",
    templateUrl: "studentModal.component.html",
    styleUrls: ["./studentModal.component.less"]
})
export class StudentModalComponent {

    // tslint:disable-next-line:no-parameter-properties
    constructor(private activeModal: NgbActiveModal, private store: Store<any>) { }

    public addStudent(firstName: string, lastName: string, address: string, description: string): void {
        const data = { firstName, lastName, address, description };
        this.store.dispatch(new StudentAction.AddStudent(data));
        this.activeModal.close();
    }
}
