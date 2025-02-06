import { Component } from '@angular/core';
import { DataTableComponent } from "./data-table/data-table.component";
import { ToolBarComponent } from "./tool-bar/tool-bar.component";

@Component({
  selector: 'app-admin-component',
  standalone: true,
  imports: [DataTableComponent, ToolBarComponent],
  templateUrl: './admin-component.component.html',
  styleUrl: './admin-component.component.scss'
})
export class AdminComponentComponent {

}
