import { NgModule } from "@angular/core";
import { SliderComponent } from './slider/slider.component'
import { ButtonComponent } from "./button/button.component";

@NgModule({
  imports: [SliderComponent, ButtonComponent],
  exports: [SliderComponent, ButtonComponent]
})
export class UiKitModule { }