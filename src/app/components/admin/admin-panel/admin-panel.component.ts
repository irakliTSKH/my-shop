import { Component } from '@angular/core';
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { DataTableComponent } from "./data-table/data-table.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ToolBarComponent, DataTableComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {

}
