import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    SliderModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input() value!: any;
  @Input() min: number = 10;
  @Input() max: number = 100;
}