import { Component } from '@angular/core';
import { GridItemComponent } from "./grid-item/grid-item.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-grid-home',
  standalone: true,
  imports: [],
  templateUrl: './grid-home.component.html',
  styleUrl: './grid-home.component.scss'
})
export class GridHomeComponent {
   constructor(private dialog: MatDialog) {}

   titleArray = [ 'one', 'two', 'three']

  
    openGridItem() {
      this.dialog.open(GridItemComponent, {
        height: '80vh',
        width: '70vw',
        data: {
          title: 'dynamic title',
          content: 'This is the content of the dialog.'
        }
      });
    }
}
