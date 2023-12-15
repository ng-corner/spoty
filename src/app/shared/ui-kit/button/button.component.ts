import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() icon: string = '';
  @Input() size: 'small' | 'large' | string = '';
  @Input() emit: () => {} = () => { };

  @HostListener('click', ['$event'])
  click() {
    this.emit("$event");
  }
}
