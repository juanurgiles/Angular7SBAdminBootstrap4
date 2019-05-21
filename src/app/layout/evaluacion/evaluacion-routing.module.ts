import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluacionComponent } from './evaluacion.component';
import { InformeCarreraComponent } from './informexcarrera.component';

const routes: Routes = [
    {
        path: '', component: EvaluacionComponent,
    },
    {
        path: 'carrera', component: InformeCarreraComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluacionRoutingModule {
}
