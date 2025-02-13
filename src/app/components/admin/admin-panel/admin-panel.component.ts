import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { IAdmin } from '../../../interface/admin.interface';
import { Subject, takeUntil } from 'rxjs';
import { AdminComponentComponent } from "./admin-component/admin-component.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ ReactiveFormsModule, AdminComponentComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private adminService: AdminService){
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required,  Validators.minLength(5)]]
    })
  }
  
  myForm: FormGroup;
  admin = false
  adminArray!: IAdmin[]  
  incorrectAdmin = false
  loginError = false
  private destroy$ = new Subject<void>();
  
  ngOnInit(): void {
    this.adminService
    .getAdmin()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (Response: IAdmin[]) => {
        this.adminArray = Response        
      }
    })
  }
  
    get name(){
      return this.myForm.get('name')
    }
    get password(){
      return this.myForm.get('password')
    }

  onSubmit() {
    if (this.adminArray.some((admin) => admin.name === this.name?.value && admin.password === this.password?.value)) {
     this.admin = true
    } else {
      this.loginError = true
    }
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
