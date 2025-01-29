import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { GridHomeComponent } from "./grid-home/grid-home.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GridHomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  
  sliderArr: string[] = [
    '/44.webp',
    '/55.jpg',
    '/66.jfif',
    '/77.webp'
  ]
  
  currentImage!: string;
  private currentIndex = 0;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.currentImage = this.sliderArr[this.currentIndex];
    this.startImageSlider();
  }

  changeNextCurrentImage(){
    this.currentIndex = (this.currentIndex + 1) % this.sliderArr.length;
    this.currentImage = this.sliderArr[this.currentIndex];
  }

  changePrevCurrentImage(){
    if(this.currentIndex === 0){
      this.currentIndex = this.sliderArr.length - 1;
    } else {
      this.currentIndex = (this.currentIndex - 1) % this.sliderArr.length;
    }
    this.currentImage = this.sliderArr[this.currentIndex];
  }

  startImageSlider() {
    const imageInterval = interval(5000);
      imageInterval
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.changeNextCurrentImage();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
