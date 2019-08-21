import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Student } from "../../../common/entities/student";
import { StudentModalComponent } from "../student-form/studentModal.component";
import { Store } from "@ngrx/store";
import * as StudentAction from "../../../redux/actions/students.actions";

@Component({
    selector: "students-comp",
    templateUrl: "./students.component.html",
    styleUrls: ["./students.component.less"]
})
export class StudentsComponent implements OnInit {
    public students: Student[] = [];
    // tslint:disable-next-line:no-parameter-properties
    constructor(private store: Store<any>, private modalService: NgbModal) { }

    public ngOnInit(): void {
        this.store.dispatch(new StudentAction.GetStudents());
        this.store.select("students").subscribe
            (response => {
                this.students = response.students;
            });
    }
    public openModal(): void {
        const modalRef = this.modalService.open(StudentModalComponent);
    }
}
