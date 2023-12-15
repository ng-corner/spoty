import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { UiKitModule } from "./ui-kit/ui-kit.module";

@NgModule({
  imports: [UiKitModule, CommonModule],
  exports: [UiKitModule, CommonModule],
})
export class SharedModule { }