import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core'
import { MatSortModule } from '@angular/material/sort';



@NgModule({
    declarations:[
    ],

    imports: [
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        MatTabsModule,
        MatRadioModule,
        MatStepperModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule
    ],
    exports: [
        MatToolbarModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatTabsModule,
        MatRadioModule,
        MatStepperModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule
    ]

})
export class MaterialModule {}