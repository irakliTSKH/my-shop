
import { Component, effect } from '@angular/core';
import { SparkPlugsService } from '../../../services/spark-plugs.service';
import { ISparkPlug } from '../../../interface/sparkPlugs.interface';
import { CommonModule } from '@angular/common';
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
  constructor(private sparkPlugsService: SparkPlugsService){
    effect(() => {
      this.filterArray = [...this.sparkPlugsArray];
    });
   }
  
  filterArray: ISparkPlug[] = []
  searchKeyword = ''
 
  get sparkPlugsArray() {
    return this.sparkPlugsService.sparkPlugsData();
  }

    search() {
      if (!this.searchKeyword.trim()) {
        this.filterArray = [...this.sparkPlugsArray]; 
        return;
      }
      this.filterArray = this.sparkPlugsArray.filter(item =>
        item.name.toLowerCase().toString()
        .includes(this.searchKeyword.toLocaleLowerCase()) 
        || item.id.toString().toLowerCase().includes(this.searchKeyword.toLocaleLowerCase())
      );
  }
}
