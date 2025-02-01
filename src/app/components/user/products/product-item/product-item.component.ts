import { Component, Input } from '@angular/core';
import { ISparkPlug } from '../../../../interface/sparkPlugs.interface';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input()  spDescribe!: ISparkPlug;

}
