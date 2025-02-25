import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISparkPlug } from '../../../../../interface/sparkPlugs.interface';
@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss'
})
export class GridItemComponent  {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {filterArr : ISparkPlug[]}
  ){}


}
