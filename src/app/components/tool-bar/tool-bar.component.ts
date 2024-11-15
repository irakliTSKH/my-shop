import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddItemComponent } from '../add-item/add-item.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  constructor(private dialog: MatDialog) {}

  openAddEditForm() {
    this.dialog.open(AddItemComponent, {
      height: '600px',
      width: '600px',
    });
  }
}
