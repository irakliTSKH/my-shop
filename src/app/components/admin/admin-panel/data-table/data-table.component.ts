import { Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { SparkPlugsService } from '../../../../services/spark-plugs.service';
import { ISparkPlug } from '../../../../interface/sparkPlugs.interface';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  sparkPlugsService = inject(SparkPlugsService)

  displayedColumns: string[] = ['id', 'name', 'brand', 'quantity', 'price', 'date'];
  dataSource!: MatTableDataSource<any>;
  data!: ISparkPlug[]

  ngOnInit(): void {
   this.getSparkPlugs()
  }
  
  getSparkPlugs(){
    this.data = this.sparkPlugsService.getSparkPlugsData()
    this.dataSource = new MatTableDataSource(this.data)
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

