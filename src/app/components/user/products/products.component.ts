import { Component } from '@angular/core';
import { SparkPlugsService } from '../../../services/spark-plugs.service';
import { ISparkPlug } from '../../../interface/sparkPlugs.interface';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ProductItemComponent } from "./product-item/product-item.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private sparkPlugsService: SparkPlugsService){ }

  sparkPlugsArray! : ISparkPlug[]
  filterArray!: ISparkPlug[]
  searchKeyword!: string
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
        this.filterArray = [...this.sparkPlugsArray];
      }
    })
  }

    search() {
      if (!this.searchKeyword) {
        this.filterArray = [...this.sparkPlugsArray]; 
        return;
      }
      const keyword = this.searchKeyword.toLowerCase();
    
      this.filterArray = this.sparkPlugsArray.filter(item =>
        item.name.toLowerCase().toString().includes(keyword) || item.id.toString().toLowerCase().includes(keyword)
      );
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
