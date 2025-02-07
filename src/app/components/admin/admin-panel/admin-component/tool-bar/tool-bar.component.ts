import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AddItemComponent } from './add-item/add-item/add-item.component';

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
      height: '500px',
      width: '500px',
    });
  }
}
