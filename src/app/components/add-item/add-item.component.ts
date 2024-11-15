import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DialogRef } from '@angular/cdk/dialog';
import { AddItemService } from '../../services/add-item.service';
import { ISparkPlug } from '../../interface/sparkPlugs.interface';


@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {

  constructor(private fb: FormBuilder, private dialogRef: DialogRef, private addItemService: AddItemService) {
    this.myForm = this.fb.group({
      brand: '',
      name: '',
      id: '',
      price: '',
      quantity: '',
      date: ''
    });
  }
  
  myForm: FormGroup;
  sparkPlugsName: string[] = ['NGK', 'Denso', 'Bosch', 'MotorCraft', 'Acdelco', 'Champion'];

  addItem(data: ISparkPlug){
    this.addItemService.addItem(data).subscribe({
      next: (Response) => {
        console.log("item Added", Response);
      }, error: (Error) => {
        console.log(Error);
      }
    })
  }

  onFormSubmit() {
    if(this.myForm.valid){
      this.addItem(this.myForm.value as ISparkPlug)
      this.dialogRef.close()
    }
  }

  close(){
    this.dialogRef.close()
  }
}
