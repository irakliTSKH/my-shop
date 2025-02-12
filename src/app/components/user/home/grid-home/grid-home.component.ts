import { Component, inject} from '@angular/core';
import { GridItemComponent } from "./grid-item/grid-item.component";
import { MatDialog } from '@angular/material/dialog';
import { SparkPlugsService } from '../../../../services/spark-plugs.service';

@Component({
  selector: 'app-grid-home',
  standalone: true,
  imports: [],
  templateUrl: './grid-home.component.html',
  styleUrl: './grid-home.component.scss'
})
export class GridHomeComponent {

   dialog = inject(MatDialog)
   sparkPlugsArray = inject(SparkPlugsService).sparkPlugsData
  
    openGridItem(name: string) {
      const filterSparkPlugs = this.sparkPlugsArray().filter((item) => {
        return item.brand.toLocaleLowerCase() === name.toLocaleLowerCase()
       })
      this.dialog.open(GridItemComponent, {
        height: '80vh',
        width: '70vw',
        data: {
         filterArr : filterSparkPlugs
        }
      });
    }

}
