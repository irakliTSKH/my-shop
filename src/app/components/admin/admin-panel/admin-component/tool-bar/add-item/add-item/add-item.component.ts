import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AddItemService } from '../../../../../../../services/add-item.service';
import { ISparkPlug } from '../../../../../../../interface/sparkPlugs.interface';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnDestroy {

  constructor(private fb: FormBuilder, private dialogRef: DialogRef, private addItemService: AddItemService) {
    this.myForm = this.fb.group({
      brand:['', Validators.required],
      name: ['', Validators.required],
      id: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }
  
  myForm: FormGroup;
  sparkPlugsName: string[] = ['NGK', 'DENSO', 'BOSCH', 'MOTORCRAFT', 'ACDELCO', 'CHAMPION'];
  private destroy$ = new Subject<void>();

  addItem(data: ISparkPlug){
    this.addItemService
    .addItem(data)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (Response) => {
        console.log("item Added", Response);
        this.dialogRef.close()
      }, error: (Error) => {
        console.log(Error);
      }
    })
  }

  onFormSubmit() {
    if(this.myForm.valid){
      this.addItem(this.myForm.value as ISparkPlug)
    }
  }

  close(){
    this.dialogRef.close()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
