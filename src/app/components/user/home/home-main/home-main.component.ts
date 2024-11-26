import { Component } from '@angular/core';
import { SparkPlugsService } from '../../../../services/spark-plugs.service';
import { ISparkPlug } from '../../../../interface/sparkPlugs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent {

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
