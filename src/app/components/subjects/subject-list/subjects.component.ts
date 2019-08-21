import { Component, OnInit } from "@angular/core";
import { Subject } from "../../../common/entities/subject";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SubjectAddModalComponent } from "../subject-add-form/subjectAddModal.component";
import { Store } from "@ngrx/store";
import * as SubjectAction from "../../../redux/actions/subject.actions";

@Component({
    selector: "subjects-comp",
    templateUrl: "./subjects.component.html",
    styleUrls: ["./subjects.component.less"]
})
export class SubjectsComponent implements OnInit {
    public subjects: Subject[] = [];
    // tslint:disable-next-line:no-parameter-properties
    constructor(private modalService: NgbModal, private store: Store<any>) { }

    public ngOnInit(): void {
        this.store.dispatch(new SubjectAction.GetSubjects());
        this.store.select("subjects").subscribe
            (response => {
                this.subjects = response.subjects;
            });
    }
    public openModal(): void {
        const modalRef = this.modalService.open(SubjectAddModalComponent);
    }
}
