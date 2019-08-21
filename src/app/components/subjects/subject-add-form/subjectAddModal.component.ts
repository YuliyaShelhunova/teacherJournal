import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import * as SubjectAction from "../../../redux/actions/subject.actions";

@Component({
    selector: "ngbd-modal-content",
    templateUrl: "subjectAddModal.component.html",
    styleUrls: ["./subjectAddModal.component.less"]
})
export class SubjectAddModalComponent {

    // tslint:disable-next-line:no-parameter-properties
    constructor(public activeModal: NgbActiveModal, private store: Store<any>) {}

    public addSubject(name: string, teacher: string, cabinet: number, description: string): void {
        // call service to send to backend
        const data = { name, teacher, cabinet, description };
        this.store.dispatch(new SubjectAction.AddSubject(data));
        this.activeModal.close();
    }
}
