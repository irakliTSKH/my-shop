import { Component, computed, inject, Signal } from '@angular/core';
import { SparkPlugsService } from '../../../../../services/spark-plugs.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ISparkPlug } from '../../../../../interface/sparkPlugs.interface';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  private sparkPlugsService = inject(SparkPlugsService);
  sparkPlugsArray: Signal<ISparkPlug[]> = this.sparkPlugsService.sparkPlugsData;

  sortedSparkPlugs = computed(() => 
    [...this.sparkPlugsArray()].sort((a, b) => a.brand.localeCompare(b.brand))
  );
}
