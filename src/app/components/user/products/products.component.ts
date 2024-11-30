import { Component } from '@angular/core';
import { SparkPlugsService } from '../../../services/spark-plugs.service';
import { ISparkPlug } from '../../../interface/sparkPlugs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private sparkPlugsService: SparkPlugsService){ }

  data! : ISparkPlug[]

  ngOnInit(): void {
    this.getSparkPlugs()
  }
  
  getSparkPlugs(){
    this.sparkPlugsService.getDataService().subscribe({
      next: (Response: ISparkPlug[]) => {
        this.sparkPlugsService.setSparkPlugsData(Response);
        this.data = this.sparkPlugsService.getSparkPlugsData();
      }
    })
  }
}
