import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatListModule],
    exports: [MatButtonModule, MatInputModule, MatListModule],
})
export class AngularMaterialModule { }
