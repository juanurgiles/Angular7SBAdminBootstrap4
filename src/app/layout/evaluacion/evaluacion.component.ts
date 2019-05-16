import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EvaluacionService } from './servicio/evaluacion.service';
import { ReporteAmbito } from './dominio/reporteAmbito.model';

@Component({
    // selector: 'app-form',
    templateUrl: './evaluacion.component.html',
    styleUrls: ['./evaluacion.component.scss'],
    animations: [routerTransition()]
})
export class EvaluacionComponent implements OnInit {
    constructor(private evaluacionService: EvaluacionService) {}
    carreras: any[] = [];
    carreraSeleccionada;
    docentes: any[] = [];
    docenteSeleccionado;
    ciclos: any[] = [];
    cicloSeleccionado;
    asignaturas: any[] = [];
    asignaturaSeleccionada;
    evaluacion: any[] = [];
    reporteEval: any[];
    promediototal;
    ngOnInit(): void {
        this.evaluacionService.recuperarCarreras().then(resp => {
            this.carreras = resp;
        });
    }
    recuperarCiclosDocente() {
        this.evaluacionService.recuperarDocentesxCarrera(this.docenteSeleccionado.idDocente).then(resp => {
            this.ciclos = resp;
        });
    }
    recuperarDocentes() {
        this.evaluacionService.recuperarDocentesxCarrera(this.carreraSeleccionada.idCarrera).then(resp => {
            this.docentes = resp;
        });
    }
    recuperarCiclos() {
        this.evaluacionService.recuperarCiclosDocente(this.docenteSeleccionado.idDocente).then(resp => {
            this.ciclos = resp;
        });
    }
    recuperarAsignaturas() {
        this.evaluacionService.asignaturaDocenteCiclo(this.docenteSeleccionado.idDocente, this.cicloSeleccionado.idCiclo).then(resp => {
            this.asignaturas = resp;
        });
    }
    recuperarEvaluacion() {
        this.evaluacionService
            .evaluacionProfesorAsignatura(this.docenteSeleccionado.idDocente, this.asignaturaSeleccionada.idAsignatura)
            .then(resp => {
                this.evaluacion = resp;
                this.ordenarReporte();
            });
    }
    ordenarReporte() {
        let ambitos = [];

        this.evaluacion.forEach(element => {
            ambitos.push(element.nombreAmbito);
            this.promediototal += +element.notaPonderada;
        });
        this.promediototal = this.promediototal / ambitos.length;
        this.promediototal = this.promediototal.toFixed(2);
        ambitos = ambitos.filter((el, i, a) => i === a.indexOf(el));
        const reporte = [];
        ambitos.forEach(element => {
            const ambito: any = {};
            ambito.ambito = element;
            ambito.ambitos = this.evaluacion.filter((el, i, a) => el.nombreAmbito === element);
            ambito.total = 0;
            ambito.ambitos.forEach(el1 => {
                ambito.total += parseFloat(el1.notaPonderada);
            });

            ambito.total = ambito.total / ambito.ambitos.length;
            ambito.ambitos.push({descripcionPregunta: 'TOTAL', notaPonderada: ambito.total.toFixed(2)});
            ambito.total = ambito.total.toFixed(2);

reporte.push(ambito);
        });
        this.reporteEval = (reporte);
    }
}
