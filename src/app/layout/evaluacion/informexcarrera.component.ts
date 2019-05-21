import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EvaluacionService } from './servicio/evaluacion.service';
import { ReporteAmbito } from './dominio/reporteAmbito.model';

@Component({
    // selector: 'app-form',
    templateUrl: './informexcarrera.component.html',
    styleUrls: ['./evaluacion.component.scss'],
    animations: [routerTransition()]
})
export class InformeCarreraComponent implements OnInit {
    constructor(private evaluacionService: EvaluacionService) {}
    carreras: any[] = [];
    carreraSeleccionada;
    reporteEval: any[];
    promediototal;
    revaluacion = [];
    ngOnInit(): void {
        this.evaluacionService.recuperarCarreras().then(resp => {
            this.carreras = resp;
        });
    }

    recuperarEvaluacion() {
        this.evaluacionService.informexCarrera(this.carreraSeleccionada.idCarrera).then(resp => {
            this.reporteEval = resp;
            this.ordenarReporte();
        });
    }

    ordenarReporte() {
        let profesores = [];
        this.promediototal = 0;
        this.reporteEval.forEach(element => {
            profesores.push(element.nombreProfesor);
            this.promediototal += parseFloat(element.nota);
        });
        this.promediototal = (this.promediototal / this.reporteEval.length).toFixed(2);
        const revaluacion = [];
        profesores = profesores.filter((el, i, a) => i === a.indexOf(el));
        let profe;
        profesores.forEach(element => {
            revaluacion.push({ profesor: element, eval: this.reporteEval.filter((el, i, a) => el.nombreProfesor === element) });
        });
        this.revaluacion = revaluacion;
        console.log(this.revaluacion);
    }
}
