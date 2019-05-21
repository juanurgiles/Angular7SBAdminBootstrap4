import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { EvaluacionComponent } from './evaluacion.component';
import { PageHeaderModule } from './../../shared';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { EvaluacionService } from './servicio/evaluacion.service';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import {TableModule} from 'primeng/table';
import { InformeCarreraComponent } from './informexcarrera.component';

@NgModule({
    imports: [PDFExportModule, DropdownModule, TableModule, FormsModule, CommonModule, EvaluacionRoutingModule, PageHeaderModule],
    declarations: [EvaluacionComponent, InformeCarreraComponent]
})
export class EvaluacionModule  {

}
