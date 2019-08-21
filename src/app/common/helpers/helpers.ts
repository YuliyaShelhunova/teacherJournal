import { Injectable } from "@angular/core";

@Injectable()
export class HelpersService {

    public addColumnInTable(): void {
        let date = new Date();
        let parseDate = date.getDate() + "/" + date.getMonth();
        $("#journal tr").append($("<td>"));
        $("#journal thead tr>td:last").append($('<input type="string" style="width: 60px;">').val(parseDate));
        $("#journal tbody tr").each(function (): void {
            $(this).children("td:last").append($('<input type="string" style="width: 60px;">'));
        });
    }
}
