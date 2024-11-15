import { Component } from '@angular/core';
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { DataTableComponent } from "./components/data-table/data-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolBarComponent, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
