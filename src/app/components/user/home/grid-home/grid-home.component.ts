import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridItemComponent } from "./grid-item/grid-item.component";
import { MatDialog } from '@angular/material/dialog';
import { SparkPlugsService } from '../../../../services/spark-plugs.service';
import { ISparkPlug } from '../../../../interface/sparkPlugs.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-grid-home',
  standalone: true,
  imports: [],
  templateUrl: './grid-home.component.html',
  styleUrl: './grid-home.component.scss'
})
export class GridHomeComponent implements OnInit, OnDestroy {
   constructor(private dialog: MatDialog, private sparkPlugsService: SparkPlugsService) {}
  
   sparkPlugsArray!: ISparkPlug[]
   filterSparkPlugs!: ISparkPlug[]
    private destroy$ = new Subject<void>();
   
   ngOnInit(): void {
    this.getSparkPlugs()
   }

     getSparkPlugs(){
       this.sparkPlugsService
       .getDataService()
       .pipe(takeUntil(this.destroy$))
       .subscribe({
         next: (Response: ISparkPlug[]) => {
           this.sparkPlugsService.setSparkPlugsData(Response);
           this.sparkPlugsArray = this.sparkPlugsService.getSparkPlugsData();
         }
       })
     }
  
    openGridItem(name: string) {
      this.filterSparkPlugs = this.sparkPlugsArray.filter((item) => {
        return item.brand.toLocaleLowerCase() === name.toLocaleLowerCase()
       })
      this.dialog.open(GridItemComponent, {
        height: '80vh',
        width: '70vw',
        data: {
         filterArr : this.filterSparkPlugs
        }
      });
    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
}
