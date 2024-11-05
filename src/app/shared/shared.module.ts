import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ToastComponent } from './toast/toast.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
    declarations: [ToastComponent, LoadingSpinnerComponent],
    exports: [ SharedModule ],
    imports: [ CommonModule, PrimeNGModule ],
})
export class SharedModule {}
