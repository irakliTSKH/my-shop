import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from './add-item/add-item/add-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  constructor(private dialog: MatDialog) {}

  openAddEditForm() {
    this.dialog.open(AddItemComponent, {
      height: '500px',
      width: '500px',
    });
  }
}
