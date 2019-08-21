import { Component } from "@angular/core";
import { ExportService } from "./../../common/services/export/export.service";

@Component({
    selector: "export-comp",
    templateUrl: "./export.component.html",
    styleUrls: ["./export.component.less"],
    providers: [ExportService]
})
export class ExportComponent {

    // tslint:disable-next-line:no-parameter-properties
    constructor(private httpExportService: ExportService) { }

    public exportFile(typeFile: string): any {
        return this.httpExportService.getFile(typeFile).subscribe((object) => {
            // ToDo:
        });
    }
}
